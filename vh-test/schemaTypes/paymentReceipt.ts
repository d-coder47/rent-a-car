export default {
  name: 'paymentReceipt',
  title: 'Payment Receipt',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'User name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'E-mail',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
      validation: (Rule) => Rule.required().min(6),
    },
    {
      name: 'paymentDate',
      title: 'Payment Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'receiptFile',
      title: 'Receipt File',
      type: 'file',
      options: {
        storeOriginalFilename: true,
      },
    },
  ],
}
