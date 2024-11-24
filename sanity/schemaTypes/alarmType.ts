import { defineType, defineField } from 'sanity'

export const alarmtype = defineType({
    type: "document",
    name: "alarmtype",
    title: "AlarmType",
    fields: [
      defineField({
        type: "string",
        name: "name",
        title: "name",
        validation: (e) => e.required(),
      }),
      defineField({
        type: "text",
        name: "trigger",
        title: "trigger",
        validation: (e) => e.required(),
      }),
      defineField({ type: "date", name: "triggerDate", title: "trigger_date" }),
    ],
  });
  
  
  