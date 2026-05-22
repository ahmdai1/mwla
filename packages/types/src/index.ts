export interface SiteLink {
  label: string
  href: string
}

export interface ToolData {
  id: string
  name: string
  slug: string
  shortDescription: string
  category?: string
  isActive: boolean
}
