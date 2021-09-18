window.onload = function () {
  let state = {
    active: null,
  }

  activate()

  async function activate() {
    state.active = await getActive()
    state.active && minimizeSections()
  }

  function minimizeSections() {
    let i = 1
    while (
      document.querySelector(
        `#swagger-ui > section > div.swagger-ui > div:nth-child(2) > div:nth-child(4) > section > div > span:nth-child(${i}) > div > h4`
      ) !== null
    ) {
      document
        .querySelector(
          `#swagger-ui > section > div.swagger-ui > div:nth-child(2) > div:nth-child(4) > section > div > span:nth-child(${i}) > div > h4`
        )
        .click()

      i++
    }
  }

  onMessage(messageActions)

  function messageActions(message) {
    switch (message.action) {
      case 'activate':
        activate()
        break
      case 'deactivate':
        deactivate()
        break

      default:
        break
    }
  }

  async function deactivate() {
    state.active = await getActive()
  }
}
