export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
  name: 'mainImage',
  title: 'Main Image',
  type: 'image',
  options: {
    hotspot: true // Enables a hotspot for cropping the image
  },
  fieldsets: [
    {
      name: 'extraFields',
      title: 'Extra Fields',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      fieldset: 'extraFields'
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption'
    }
  ]
}
,
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
   {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
  ],
}