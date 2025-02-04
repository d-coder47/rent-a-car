import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'model',
      title: 'Model',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-${doc.model}-${doc.year}`,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
    }),
    defineField({
      name: 'seats',
      title: 'Seats',
      type: 'number',
    }),
    defineField({
      name: 'fuel',
      title: 'Fuel',
      type: 'string',
      options: {
        list: [
          {title: 'Gasoline', value: 'gasoline'},
          {title: 'Diesel', value: 'diesel'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'gasoline',
      validation: (Rule) => Rule.required().error('Fuel is required'),
    }),
    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      options: {
        list: [
          {title: 'Automatic', value: 'automatic'},
          {title: 'Manual', value: 'manual'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'automatic',
      validation: (Rule) => Rule.required().error('Transmission is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 4', value: 'h4'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'availableToRent',
      title: 'Available to Rent',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'availableToSell',
      title: 'Available to Sell',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'priceToRent',
      title: 'Price To Rent',
      type: 'object',
      hidden: ({document}) => document?.availableToRent === false,
      fields: [
        {
          name: 'amount',
          title: 'Amount',
          type: 'number',
          validation: (Rule) =>
            Rule.min(0)
              .precision(2)
              .error('Amount must be a non-negative number with up to 2 decimal places'),
        },
        {
          name: 'securityDeposit',
          title: 'Security Deposit',
          type: 'number',
          validation: (Rule) =>
            Rule.min(0)
              .precision(2)
              .error('Security Deposit must be a non-negative number with up to 2 decimal places'),
        },
        {
          name: 'currency',
          title: 'Currency',
          type: 'string',
          options: {
            list: [
              {title: 'EUR', value: 'EUR'},
              {title: 'CVE', value: 'CVE'},
            ],
            layout: 'dropdown',
          },
          initialValue: 'EUR',
          validation: (Rule) => Rule.required().error('Currency is required'),
        },
      ],
    }),
    defineField({
      name: 'priceToSell',
      title: 'Price To Sell',
      type: 'object',
      hidden: ({document}) => document?.availableToSell === false,
      fields: [
        {
          name: 'amount',
          title: 'Amount',
          type: 'number',
          validation: (Rule) =>
            Rule.min(0)
              .precision(2)
              .error('Amount must be a non-negative number with up to 2 decimal places'),
        },
        {
          name: 'currency',
          title: 'Currency',
          type: 'string',
          options: {
            list: [
              {title: 'EUR', value: 'EUR'},
              {title: 'CVE', value: 'CVE'},
            ],
            layout: 'dropdown',
          },
          initialValue: 'EUR',
          validation: (Rule) => Rule.required().error('Currency is required'),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
