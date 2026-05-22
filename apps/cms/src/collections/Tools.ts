import { CollectionConfig } from 'payload/types'

const Tools: CollectionConfig = {
  slug: 'tools',
  labels: {
    singular: 'Tool',
    plural: 'Tools',
  },
  admin: {
    defaultColumns: ['name', 'slug', 'isActive'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'websiteUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'affiliateUrl',
      type: 'text',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}

export default Tools
