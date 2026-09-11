# Contador de Visitas - Portal Web UNGRD Chocó

Widget y aplicación web ligera para mostrar el número de visitas en tiempo real del **Portal de Información Sísmica - San José del Palmar (Chocó)** de la UNGRD.

---

## 🌐 Conexión con ArcGIS Enterprise
- **Portal URL**: `https://eqchoco.gestiondelriesgo.gov.co/portal`
- **Ítem del Portal Web**: `4bb0f289f3ef4e5eb2524c5af0c1ad11`
- **Endpoint REST**: `https://eqchoco.gestiondelriesgo.gov.co/portal/sharing/rest/content/items/4bb0f289f3ef4e5eb2524c5af0c1ad11?f=json`
- **Lectura en tiempo real**: Atributo oficial `numViews`.

---

## 🎨 Branding Institucional
- **Color Principal**: Azul Institucional `#222d5d` y `#1a4d9b`.
- **Tipografía**: `Inter` y `JetBrains Mono` para los dígitos digitales.
- **Logo**: Logo oficial de la UNGRD.
- **Sin botones externos**: Diseñado para estar incrustado directamente dentro del portal.

---

## 🚀 Cómo incrustar en el Portal Web de ArcGIS Sites
Puedes incrustarlo en una tarjeta HTML o Iframe en el Portal con el siguiente código:

```html
<iframe 
  src="https://dureyes97.github.io/contador-visitas/" 
  width="100%" 
  height="190" 
  frameborder="0" 
  style="border:none; overflow:hidden;" 
  scrolling="no">
</iframe>
```
