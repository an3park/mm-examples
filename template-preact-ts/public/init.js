module.exports = {
  initializeApp: async () => {
    return {
      widget: {
        priority: 1,
        url: './widget.html',
        greeting_message: 'Hello',
        height: 361,
        call_to_action_button: {
          text: 'Edit',
          action: 'open_url',
          payload: {
            url: './cta.html',
            presentation: 'modal',
          },
        },
      },
    }
  },
}
