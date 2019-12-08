import { EventI } from 'src/models/event.model';

export class CreateEventDTO implements EventI {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  posterImage: string;
  interfaceColor: string;
  location: {
    faculty: string;
    building: string;
  };
  organizer: string;
  schedules: [
    {
      date: string;
      startTime: string;
      endTime: string;
      schedule: [
        {
          startTime: string;
          agenda: string;
        },
      ];
    },
  ];
}
