import { format } from 'date-fns'

export function formatDate(){

}
export function timeSince(date) {

    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
    let interval = seconds / 31536000; // to get years.
  
    const days = seconds / 86400; // to get days
    interval = seconds / 3600;

    if (days > 1 && interval > 23) {
        const result = format(new Date(date), 'dd MMMM yyyy')
      return result;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return `${Math.floor(interval)} hours ago`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      return `${Math.floor(interval)} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  }
