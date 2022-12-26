import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'appointment',
  title: 'Appointment',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'reason',
    //   title: 'Reason',
    //   type: 'string',
    // }),
    defineField({
      name: 'paitent_name',
      title: 'paitent name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    
    defineField({
      name: 'speciality',
      title: 'Which doctor needed',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
  ],
  // mutations: [
  //   defineMutation({
  //     name: 'updateAppointmentPaitentName',
  //     description: 'Updates the paitent name field of an appointment document',
  //     args: {
  //       id: 'ID!',
  //       paitentName: 'String!',
  //     },
  //     type: 'appointment',
  //     resolve: (root, args, context) => {
  //       const {id, paitentName} = args
  //       return context.patch(id).set({paitent_name: paitentName}).commit()
  //     },
  //   }),
  // ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
