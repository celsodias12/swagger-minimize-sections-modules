// Código que pode ser executado ao instalar, atualizar ou inicializar
// Estado e operações de longo prazo, independentemente do tmepo de vide de qualquer página da web ou janela do navegador

const NORMAL_SPEED = 2

onExtensionInstalled(setInitialActive)

async function setInitialActive() {
  const active = await getActive()

  !active && setActive(true)
}
