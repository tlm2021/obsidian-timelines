import type { TimelinesSettings } from './types'

export const DEFAULT_SETTINGS: TimelinesSettings = {
    timelineTag: 'timeline-1337',
    sortDirection: true
}

export const RENDER_TIMELINE: RegExp = /<!--TIMELINE BEGIN tags=['"]([^"]*?)['"]-->([\s\S]*?)<!--TIMELINE END-->/i;
