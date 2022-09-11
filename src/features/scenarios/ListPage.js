import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { CenteredCard, ColumnFlexItem, FlexItem, RowFlexItem, StatusDisplayer, StyledColumnCard, TimeAgo, Wrapper } from '../../common-components/common';
import styled from 'styled-components';
import { addScenario, getScenarios } from './Scenarios.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RightAlignedFlexItem = styled(FlexItem)`
    margin-left: auto;
`;
const ScenariosFlexItem = styled(FlexItem)`
padding: 8px;
background-color: #e8e8e8;
justify-content: space-evenly;
display: flex;
flex-wrap: wrap;
> div{
    flex-grow: 1;
    width: 200px;
    height: 200px;
}
`
export const StyledSelect = styled.select`
border:none;
outline: none;
font-weight: bold;
`

export const StyledActionsWrapper = styled(RowFlexItem)`
    gap: 4px;
`;

const StyledCenteredCard = styled(CenteredCard)`
flex-direction: column;
gap: 4px;`

const AddScenarioArea = styled(ColumnFlexItem)`
cursor: pointer;`

function Toolbar({ selectedValue, onSort, onSearch, searchedValue, onSortOrder, selectedOrderBy }) {
    return (
        <RowFlexItem>
            <FlexItem >
                <StyledSelect
                    value={selectedValue}
                    onChange={onSort}
                >
                    <option value="name">Alphabetically</option>
                    <option value="status">Status</option>
                    <option value="created">Creation Date</option>
                </StyledSelect>
                <StyledSelect
                    value={selectedOrderBy}
                    onChange={onSortOrder}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </StyledSelect>
            </FlexItem>
            <RightAlignedFlexItem>
                <input
                    onChange={onSearch}
                    placeholder={'Search...'}
                    type="text"
                    value={searchedValue}
                />
            </RightAlignedFlexItem>
        </RowFlexItem>
    )
}

function AddScenario({onAddScenario}) {
    const [showForm, setShowForm] = useState(false);
    const [scenarioName, setScenarioName] = useState('');
    const onClick = useCallback(() => {
        setScenarioName('');
        setShowForm(true);
    },[]);
    const onChange = useCallback((e) => {
        setScenarioName(e.target.value);
    },[]);
    const onAddClick = useCallback((e) => {
        setShowForm(false);
        onAddScenario(scenarioName);
    },[onAddScenario, scenarioName]);
    const onCancelClick = useCallback((e) => {
        setShowForm(false);
    },[]);
    return (
        <StyledCenteredCard>
            {!showForm && <AddScenarioArea onClick={onClick} >
                <FontAwesomeIcon icon="fa-solid fa-plus"/>
                Add scenario
            </AddScenarioArea>
            }
            {
                showForm && <>
                  <input
                    onChange={onChange}
                    placeholder={'Enter Scenario name...'}
                    type="text"
                    value={scenarioName}
                />
                <StyledActionsWrapper>
                <button onClick={onAddClick}>
                    Add
                </button>
                <button onClick={onCancelClick}>
                    Cancel
                </button>
                </StyledActionsWrapper>
                
                </>
            }
        </StyledCenteredCard>
    )
}

function Scenarios({ scenarios = [], onAddScenario }) {
    return (
        <>
            <ScenariosFlexItem className='column'>
                <AddScenario onAddScenario={onAddScenario}/>
                {scenarios.map((p => {
                    return (
                        <StyledColumnCard key={p.id}>
                            <div className={'data'}>{p.name}</div>
                            <div className={'card-footer'}>
                                <TimeAgo time={p.created} numberOfDays={1} />
                                <StatusDisplayer status={p.status}></StatusDisplayer>
                            </div>

                        </StyledColumnCard>
                    )
                }))}
            </ScenariosFlexItem>
        </>
    )
}

export function ListPage() {
    const [scenarios, setScenarios] = useState([]);
    const [selectedSort, setSelectedSort] = useState('status');
    const [selectedOrderBy, setSelectedOrderBy] = useState('asc');
    const [searchValue, setSearchValue] = useState('');

    const formattedScenarios = useMemo(() => {
        // return scenarios.sort(compare);
        const filteredValues = scenarios.filter(p => p?.name?.toLowerCase().indexOf(searchValue.toLocaleLowerCase()) >= 0);
        filteredValues.sort(function (res01, res02) {
            var arg01 = res01[selectedSort].toLowerCase();
            var arg02 = res02[selectedSort].toLowerCase();
            if (selectedOrderBy === 'desc') {
                if (arg01 < arg02) { return 1; }
                if (arg01 > arg02) { return -1; }
                return 0;

            }
            else {
                if (arg01 < arg02) { return -1; }
                if (arg01 > arg02) { return 1; }
                return 0;

            }
        });
        return filteredValues;
    }, [scenarios, selectedSort, selectedOrderBy, searchValue]);

    const onAddScenario = useCallback(async(name) => {
        const updatedScenarios = await addScenario(name, scenarios);
        setScenarios(updatedScenarios);
    }, [scenarios]);

    const onSort = useCallback((o) => {
        setSelectedSort(o.target.value);
    }, []);
    const onSortOrder = useCallback((o) => {
        setSelectedOrderBy(o.target.value);
    }, []);
    const onSearch = useCallback((o) => {
        setSearchValue(o.target.value);
    }, []);

    useEffect(() => {
        async function _getScenarios() {
            const scenarios = await getScenarios();
            setScenarios(scenarios);
        }
        _getScenarios();
    }, [])

    return (
        <Wrapper>
            <Toolbar onSearch={onSearch} onSort={onSort} selectedValue={selectedSort} selectedSearchValue={searchValue} selectedOrderBy={selectedOrderBy} onSortOrder={onSortOrder}></Toolbar>
            <Scenarios scenarios={formattedScenarios} onAddScenario={onAddScenario}/>
        </Wrapper>
    );
}
