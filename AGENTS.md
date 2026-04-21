# AGENTS.md

## Project context
This project is an existing ReactJS website that needs to be refactored and visually improved based on the current interface and codebase.

The goal is not to rebuild everything from scratch.
The goal is to:
- preserve the current business logic and content structure where possible
- improve code quality and maintainability
- improve UI aesthetics based on the current design direction
- make the interface responsive across desktop, tablet, and mobile
- keep changes incremental and reviewable

## Primary objectives
1. Refactor the existing UI code into cleaner, smaller, reusable components
2. Improve visual hierarchy, spacing, typography, and layout consistency
3. Enhance responsiveness for multiple screen sizes
4. Keep the existing flow and core user experience unless explicitly changed
5. Avoid unnecessary rewrites

## Constraints
- Do not rewrite unrelated business logic
- Do not introduce heavy dependencies unless clearly justified
- Do not redesign the product direction from scratch
- Reuse existing components and structure when it makes sense
- Keep implementation practical and maintainable
- Changes should be easy to review in small steps

## UI direction
- Base the new UI on the existing interface
- Improve the current design rather than replacing it blindly
- Prefer cleaner spacing, stronger typography, and more consistent composition
- Use subtle and elegant transitions instead of excessive animation
- Responsive behavior must be considered part of the implementation, not an afterthought

## Responsive expectations
The UI must work well across:
- Desktop
- Laptop
- Tablet
- Mobile

Check for:
- layout breakage
- overflow issues
- image scaling problems
- poor text wrapping
- inconsistent spacing
- navigation usability
- touch friendliness on smaller devices

## Required workflow
Before making code changes:
1. Read the current codebase
2. Summarize the current structure
3. Identify low-risk refactor opportunities
4. List the files that will be changed
5. Explain why those files need changes

During implementation:
- Prefer small iterative changes
- Preserve current functionality
- Refactor page by page or component by component
- Keep code readable and modular

After implementation:
- Summarize what changed
- Explain any structural improvements
- Note any remaining issues or follow-up suggestions

## Coding preferences
- Prefer clear React component structure
- Keep props simple and understandable
- Extract repeated UI into shared components
- Avoid deep nesting where possible
- Keep styles consistent across the project
- Preserve naming consistency unless there is a strong reason to improve it

## Definition of done
A task is done when:
- the page still works correctly
- the UI looks cleaner and more polished
- the code is more maintainable than before
- the layout is responsive at key breakpoints
- changes are limited to the intended scope
