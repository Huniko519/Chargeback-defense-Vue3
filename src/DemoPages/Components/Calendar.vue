<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-card class="main-card mb-3">
      <FullCalendar class="demo-app-calendar" ref="fullCalendar" defaultView="dayGridMonth"
        :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
        :plugins="calendarPlugins" :weekends="calendarWeekends" :events="calendarEvents"
        @dateClick="handleDateClick" />
    </b-card>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    PageTitle,
    FullCalendar
  },
  data: () => ({
    heading: "Calendar",
    subheading:
      "Calendars are used in a lot of apps. We thought to include one for VueJS.",
    icon: "pe-7s-car icon-gradient bg-warm-flame",

    calendarPlugins: [
      // plugins must be defined in the JS
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin // needed for dateClick
    ],
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date() }
    ]
  }),

  methods: {
    handleDateClick(arg) {
      if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        this.calendarEvents.push({
          // add new event data
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        });
      }
    }
  }
};
</script>
