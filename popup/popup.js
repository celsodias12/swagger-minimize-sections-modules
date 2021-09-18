const activeField = document.getElementById('activeCheckbox')

let initialState,
  state = {
    active: null,
  }

init()

async function init() {
  state = await getInitialState()
  initialState = { ...state }

  updateActiveField()
  addListenerActiveField()
}

async function getInitialState() {
  return { active: await getActive() }
}

async function updateActiveField() {
  activeField.checked = state.active
}

function addListenerActiveField() {
  activeField.onclick = event => {
    state.active = event.target.checked

    updateActiveField()

    state.active !== initialState.active && saveActive()
    initialState = { ...state }
  }
}

async function saveActive() {
  await setActive(state.active)
  state.active ? await sedMessage('activate') : await sedMessage('deactivate')
}
