// htmlBlock.js
export default {
  name: 'htmlBlock',
  title: 'HTML Block',
  type: 'object',
  fields: [
    {
      name: 'html',
      title: 'HTML',
      type: 'text',
    },
  ],
  preview: {
    select: {
      html: 'html',
    },
    prepare({ html }) {
      return {
        title: 'HTML Block',
        subtitle: html,
      };
    },
  },
};
