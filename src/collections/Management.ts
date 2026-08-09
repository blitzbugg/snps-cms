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
      type: 'select',
      required: true,
      options: [
        { label: 'Principal', value: 'principal' },
        { label: 'Chairman', value: 'chairman' },
        { label: 'Secretary', value: 'secretary' },
        { label: 'Joint Secretary', value: 'joint-secretary' },
        { label: 'Treasurer', value: 'treasurer' },
        { label: 'Vice President', value: 'vice-president' },
        { label: 'President', value: 'president' },
        
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Display order (1-7)',
      },
      min: 1,
      max: 7,
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