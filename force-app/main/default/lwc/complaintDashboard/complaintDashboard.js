import { LightningElement, wire } from 'lwc';
import getOpenComplaints from '@salesforce/apex/ComplaintDashboardController.getOpenComplaints';

export default class ComplaintDashboard extends LightningElement {

    openCount;

    @wire(getOpenComplaints)
    wiredComplaints({ error, data }) {

        if(data) {
            this.openCount = data;
        }

        if(error) {
            console.error(error);
        }
    }
}