module.exports = [
  {
    type: "heading",
    defaultValue: "Long Rest settings",
    size: 3,
  },
  {
    type: "section",
    items: [
      {
        type: "heading",
        defaultValue: "Timers",
      },
      {
        type: "input",
        label: "Up button",
        description: "Time in seconds",
        messageKey: "up",
        defaultValue: "360",
        attributes: {
          type: "number",
          min: 1,
          max: 65536,
          step: 1,
        },
      },
      {
        type: "input",
        label: "Select button",
        description: "Time in seconds",
        messageKey: "select",
        defaultValue: "120",
        attributes: {
          type: "number",
          min: 1,
          max: 65536,
          step: 1,
        },
      },
      {
        type: "input",
        label: "Down button",
        description: "Time in seconds",
        messageKey: "down",
        defaultValue: "60",
        attributes: {
          type: "number",
          min: 1,
          max: 65536,
          step: 1,
        },
      },
    ],
  },
  {
    type: "submit",
    defaultValue: "Save",
  },
];
