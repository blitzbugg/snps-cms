// collections/Management.ts
import { CollectionConfig } from 'payload';

export const Management: CollectionConfig = {
  slug: 'management',
  admin: {
    useAsTitle: 'name',
    group: "The School",
    defaultColumns: ['name', 'designation', 'order'],
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
      name: 'designation',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Display order (lower numbers appear first)',
      }
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
};

export default Management;