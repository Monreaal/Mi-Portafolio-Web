```markdown
## Instrucciones de Ejecución (Desarrollo)

Para habilitar la recarga automática (Live Reload), necesitas correr dos procesos simultáneamente. Abre dos pestañas distintas en tu terminal:

**Pestaña 1: Compilador de Tailwind**
Ejecuta el script de desarrollo para vigilar los cambios en tus clases y generar el CSS en tiempo real:
```bash
npm run dev

```

**Pestaña 2: Servidor de Flask**
Inicia la aplicación de Python. Gracias a LiveReload, el servidor vigilará la carpeta `templates` y `static/css` para refrescar el navegador automáticamente:

```bash
python app.py

```

## Visualización Remota (iPad, Móvil u otra PC)

Para ver e interactuar con el portafolio web desde un iPad o cualquier otro dispositivo, sigue estos pasos:

1. **Encuentra tu dirección IP local:**
* En Windows, abre la terminal y ejecuta `ipconfig`.
* Busca el valor de Dirección IPv4 (generalmente se ve como `192.168.x.x` o `10.0.x.x`).


2. **Accede desde el dispositivo:**
* Asegúrate de que el iPad y tu computadora estén conectados exactamente a la misma red WiFi.
* Abre Safari (o tu navegador de preferencia).
* En la barra de direcciones, ingresa el protocolo HTTP, tu IP local y el puerto `5000` con este formato exacto:


```text
[http://192.168.](http://192.168.)x.x:5000

```



### ⚠️ Notas Importantes para Dispositivos Externos

* **Forzar HTTP:** Escribe explícitamente `http://` al inicio de la URL. Si el navegador autocompleta con `https://`, el servidor rechazará la conexión y mostrará un error `BAD_REQUEST` en la terminal.
* **Ignorar Localhost:** No utilices `http://localhost:5000` en el iPad. El término `localhost` apunta al propio dispositivo que estás usando, por lo que el iPad no encontrará tu computadora.
* **Caché Agresiva en Safari:** Si notas que los textos de tu HTML se actualizan pero los colores o estilos de Tailwind siguen igual, es porque el iPad está guardando el CSS en caché para ahorrar datos. Para desarrollar sin este problema, visualiza la página desde una pestaña en Modo Privado / Incógnito.

```

```