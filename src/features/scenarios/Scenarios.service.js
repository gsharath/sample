import { scenarios } from "../../mock-data/scenarios-list.js";

export function getScenarios() {
    return new Promise((resolve) => {
        setTimeout((p) => {
            resolve(scenarios);
        }, 100);
    })
}
export function addScenario(name, allScenarios){
    return new Promise((resolve) => {
        setTimeout((p) => {
            const maxValue = Math.max(...allScenarios.map(o => o.id));
            const newscenario = {
                name,
                id: maxValue+1,
                created: new Date().toISOString(),
                status: "incomplete"
              };
            resolve([...allScenarios, newscenario]);
        }, 100);
    })
    
}