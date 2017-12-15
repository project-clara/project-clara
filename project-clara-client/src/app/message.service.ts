import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  errorMessages: string[] = [];
  notifications: string[] = [];

  addErrorMessage(errorMessages: string) {
    this.errorMessages.push(errorMessages);
  }

  removeErrorMessage(index: number){
    this.errorMessages.splice(index, 1);
  }

  clearAllErrorMessages() {
    this.errorMessages = [];
  }

  addNotification(notification: string) {
    this.notifications.push(notification);
  }

  removeNotification(index: number){
    this.notifications.splice(index, 1);
  }

  clearAllNotifications() {
    this.notifications = [];
  }
}
