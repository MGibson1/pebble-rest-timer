#pragma once

// these are static key values, don't change them!
#define SETTINGS_KEY 0
#define SETTINGS_VERSION_KEY 1

// the version of our settings object - linkted to the `settings` persist
#define CURRENT_SETTINGS_VERSION 1

typedef struct persist{
  uint16_t up;
  uint16_t select;
  uint16_t down;
  bool theme;
}__attribute__((__packed__)) persist;

void migrate_persist(persist* settings);
void write_persist(persist* settings);
