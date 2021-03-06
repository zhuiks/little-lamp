import { derived, writable } from "svelte/store";

export const plans = writable({});
export const currentPlan = writable(null);
export const currentPlanData = derived([plans, currentPlan], ([$plans, $currentPlan]) => $plans && $currentPlan ? $plans[$currentPlan] : null);

export const lessonInfo = writable(false);
export const currentSection = derived([currentPlanData, lessonInfo], ([$currentPlanData, $lessonInfo]) => 
  $lessonInfo && $lessonInfo.section ? $currentPlanData.sections.find((s) => !!s[$lessonInfo.section])[$lessonInfo.section] : '');

export const lastLesson = derived(currentSection, ($currentSection) => $currentSection["Lessons"]);


export const locale = writable('en');
