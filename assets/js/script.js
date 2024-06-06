// +++++++++++++++++++++ TOASTS ++++++++++++++

function mostrarToast() {
  
    let toast = document.getElementById("mitoast");
    
    toast.className = "mostrar";
    
    setTimeout(function () {
      toast.className = toast.className.replace("mostrar", "");
    }, 1000); // El toast se ocultará después de 5 segundos
  }
  
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  
  
  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
  
  
  
  
  // +++++++++++++++++++++ POPOVER ++++++++++++++
  
  
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
  
  
  
  
  
  
  
  // +++++++++++++++++++++ ALERTA ++++++++++++++
  
  function mostrarAlerta() {
    alert("Hola soy una Alerta");
  }
  
  
  
  // +++++++++++++++++++++ OFFCANVA, se encuentra en el index++++++++++++++
  //Enviar datos
function addTextNode(text){
    
  let abajo = document.getElementById('textoAgregar0').value; //LLAMAR AL TEXTO ESCRITO
  
  let newtext = document.createTextNode(abajo + ' '), // TEXTO QUE SE VA A ENVIAR
  
  p1 = document.getElementById('ElPopover');
  titulo = p1.getAttribute('data-bs-title')

  
  titulo.appendChild(newtext).replace; //AGREGAR TEXTO 

}