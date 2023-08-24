/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const { remote } = require("webdriverio");

const PLATFORM_NAME = "Android"; // Cambia esto a 'iOS' si estás probando en un dispositivo iOS
const APP_PACKAGE = "com.bluego"; // Cambia esto con el paquete de tu aplicación
const APP_ACTIVITY = "com.bluego.MainActivity"; // Cambia esto con la actividad principal de tu aplicación
// Función para agregar una espera en milisegundos
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  const opts = {
    path: "/wd/hub",
    port: 4723,
    capabilities: {
      platformName: PLATFORM_NAME,
      appPackage: APP_PACKAGE,
      appActivity: APP_ACTIVITY,
      automationName: "UiAutomator2",
      autoGrantPermissions: true,
      uiautomator2ServerInstallTimeout: 60000,
    },
  };

  const driver = await remote(opts);

  try {
    await sleep(15000); // esperar a q cargue la app
    const inputField = await driver.$("~phoneNumberInput");
    await driver.pause(1000);
    await inputField.setValue("1111111111"); // Cambia 'Texto a ingresar' con el texto que deseas ingresar
    await driver.pause(1000);
    const botonSiguiente = await driver.$("~btnNext");
    await driver.pause(1000);
    botonSiguiente.click();
    // Esperar 1 segundo antes de continuar
    await driver.pause(3000);
    //ingresas password
    const inputPass = await driver.$("~passwordInput");
    await driver.pause(1000);
    await inputPass.setValue("1"); // Cambia 'Texto a ingresar' con el texto que deseas ingresar
    await driver.pause(1000);
    const btnLogin = await driver.$("~btnLogin");
    await driver.pause(1000);
    btnLogin.click();
    await driver.pause(10000);
    const btnInstance = await driver.$("~btnPruebas");
    await driver.pause(1000);
    btnInstance.click();
    await driver.pause(1000);
    const btnSelectInstance = await driver.$("~btnSelectInstance");
    await driver.pause(1000);
    btnSelectInstance.click();
    await driver.pause(10000);
    await inputField.setValue("3326481201"); // Cambia 'Texto a ingresar' con el texto que deseas ingresar
    await driver.pause(1000);
    botonSiguiente.click();
    await driver.pause(3000);
    await inputPass.setValue("123123123");
    await driver.pause(1000);
    btnLogin.click();
    await driver.pause(1000);
    const btnMenu = await driver.$("~btnMenu");
    await driver.pause(1000);
    btnMenu.click();
    await driver.pause(1000);
    const btnActive = await driver.$("~btnActive");
    await driver.pause(1000);
    btnActive.click();
    await driver.pause(1000);
    btnMenu.click();
    await driver.pause(1000);
    btnActive.click();
    await driver.pause(1000);
    btnMenu.click();
    await driver.pause(1000);
    btnActive.click();
    await driver.pause(1000);
    btnMenu.click();
    await driver.pause(1000);
    btnActive.click();
    await driver.pause(1000);
    btnMenu.click();
    await driver.pause(1000);
    btnActive.click();
    await driver.pause(1000);
    btnMenu.click();
    await driver.pause(1000);
    btnActive.click();
    await driver.pause(10000);
  } catch (error) {
    console.error("Error durante la ejecución de la prueba:", error);
  } finally {
    await driver.deleteSession();
  }
})();
