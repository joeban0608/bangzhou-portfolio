## ADDED Requirements

### Requirement: Homepage SHALL present a complete single-page portfolio structure
The system SHALL render the root route as a single-page software engineer portfolio that includes Hero, About, Skills, Projects, Experience, and Contact sections in a readable sequence.

#### Scenario: Visitor opens the homepage
- **WHEN** a visitor requests `/`
- **THEN** the system renders a portfolio homepage instead of the default starter template
- **AND** the page includes all six primary content sections

#### Scenario: Visitor scans page structure
- **WHEN** the homepage is displayed
- **THEN** the major sections are visually separated and ordered for narrative reading

### Requirement: Homepage SHALL expose section navigation for desktop and mobile
The system SHALL provide in-page navigation links to the homepage sections, and the navigation MUST remain usable on both desktop and mobile layouts.

#### Scenario: Desktop navigation
- **WHEN** the visitor views the homepage on a desktop-width viewport
- **THEN** a visible navigation area lists links to the major sections

#### Scenario: Mobile navigation
- **WHEN** the visitor views the homepage on a mobile-width viewport
- **THEN** the page provides a compact navigation control that reveals the same section links

### Requirement: Homepage content SHALL come from a centralized content model
The system SHALL define homepage copy and structured items in a dedicated content module instead of scattering long-form content directly across route JSX files.

#### Scenario: Rendering homepage copy
- **WHEN** the homepage renders section titles, paragraphs, project entries, or contact entries
- **THEN** those values are sourced from a centralized structured content object

#### Scenario: Updating homepage content
- **WHEN** a maintainer needs to revise homepage copy or entries
- **THEN** the maintainer can update the content model without restructuring the page component tree

### Requirement: Homepage SHALL provide site metadata and language settings
The system SHALL define root-level metadata for the portfolio site and MUST set the document language to Traditional Chinese for this version.

#### Scenario: Metadata generation
- **WHEN** the homepage is built or rendered
- **THEN** the system emits a title and description matching the portfolio identity
- **AND** the metadata includes Open Graph and Twitter summary fields

#### Scenario: Document language
- **WHEN** the root layout is rendered
- **THEN** the document `lang` is set to `zh-Hant`

### Requirement: Homepage SHALL apply a cosmic dark visual theme
The system SHALL render the homepage using a dark, space-inspired visual language with layered backgrounds, elevated content surfaces, and distinct call-to-action styling while preserving text readability.

#### Scenario: Background and surface styling
- **WHEN** the visitor views the homepage
- **THEN** the page displays a dark layered background and elevated card-like surfaces

#### Scenario: Action visibility
- **WHEN** the visitor reaches the hero area or contact area
- **THEN** primary actions are visually distinct from secondary actions

### Requirement: Homepage SHALL summarize projects and provide a dedicated portfolio route
The system SHALL show exactly three featured projects on the homepage and SHALL provide a dedicated `/projects` route for the complete project list.

#### Scenario: Homepage project summary
- **WHEN** a visitor scans the Projects section on `/`
- **THEN** the page shows three featured projects in the intended order
- **AND** a visible action links to the complete portfolio page

#### Scenario: Visitor opens the portfolio page
- **WHEN** a visitor requests `/projects`
- **THEN** the system renders a full project listing page using the same content source as the homepage
- **AND** project anchors support linking to specific entries from the homepage

### Requirement: Portfolio content SHALL support multiple project data sources
The system SHALL be able to compose project entries from both the resume JSON and an additional project-extension JSON without forcing the UI layer to know which source a project came from.

#### Scenario: Extended project data is added
- **WHEN** a maintainer adds a project entry to the extension JSON
- **THEN** the project can appear in the portfolio using the same card component and content mapping rules as resume-backed projects
- **AND** local project preview images can be attached through the shared image mapping layer

### Requirement: Homepage and portfolio page SHALL support independent project ordering
The system SHALL allow homepage featured-project ordering and `/projects` full-list ordering to be controlled independently from project data.

#### Scenario: Homepage ordering differs from portfolio ordering
- **WHEN** project data defines separate ordering values for homepage and portfolio views
- **THEN** the homepage selects and orders featured projects using the homepage-specific field
- **AND** the `/projects` page orders the full list using the portfolio-specific field

#### Scenario: Legacy sort field still exists
- **WHEN** a project item does not yet define the new split ordering fields
- **THEN** the system falls back to the legacy ordering field or source order instead of failing rendering

### Requirement: Project CTA links SHALL use a normalized single-link field
The system SHALL read project outbound destinations from a single `link` field in project data, and SHALL use that same destination for homepage featured cards and full portfolio cards.

#### Scenario: Project defines a link
- **WHEN** a project item includes a `link` value
- **THEN** the project card CTA opens that destination
- **AND** the homepage featured version of the same project uses the same outbound URL

#### Scenario: Project does not define a link
- **WHEN** a project item omits `link`
- **THEN** the project card falls back to the contact destination
- **AND** the CTA label indicates contacting for more information

### Requirement: Homepage SHALL summarize experience with expandable detail
The system SHALL present a condensed experience timeline on the homepage that shows the first three entries by default and allows visitors to expand the remaining entries inline.

#### Scenario: Initial experience scan
- **WHEN** a visitor reaches the Experience section on `/`
- **THEN** the page shows three recent experience entries in timeline form
- **AND** the section provides a control for revealing additional entries

#### Scenario: Visitor expands more experience
- **WHEN** the visitor activates the expand control
- **THEN** the remaining experience entries are revealed on the same page without navigation

### Requirement: Build configuration SHALL avoid incorrect Turbopack root detection
The system SHALL configure Turbopack to use the current project directory as the application root when running Next.js in this repository layout.

#### Scenario: Production build
- **WHEN** `next build` runs in the project
- **THEN** Next.js uses the current repository as the Turbopack root
- **AND** the previous workspace root warning caused by external lockfiles is not emitted
