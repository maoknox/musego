/**
 * Actividad v.1.6.2
 * Pseudo-Class to manage all the Actividad process
 * @changelog
 *      - 1.6.2: Se reduce la cantidad de consultas para el barrio
 *      - 1.6.1: Función lambda para retornar la dirección
 *      - 1.6.0: Se agrega notificaciones y búsqueda de barrios
 *      - 1.5.1: Se agrega la verificación de si un elemento existe
 * @param {object} params Object with the class parameters
 * @param {function} callback Function to return the results
 */
var Est = function(){
    
    /**************************************************************************/
    /******************************* ATTRIBUTES *******************************/
    /**************************************************************************/
    var self = this;
    self.estadoGuarda=true;
    self.xii = null;
    //DOM attributes
    /**************************************************************************/
    /********************* CONFIGURATION AND CONSTRUCTOR **********************/
    /**************************************************************************/
    //Mix the user parameters with the default parameters
    var def = {
        ajaxUrl:'../'
    };
     
    /**
     * Constructor Method 
     */
    var Est = function() {
        self.div=$("#divEstIndex");
        self.divi=$("#divEstContact");
        self.divii=$("#divEstAbout");
        setDefaults();
    }();
     
    /**************************************************************************/
    /****************************** SETUP METHODS *****************************/
    /**************************************************************************/
    /**
     * Set defaults for Actividad
     * @returns {undefined}
     */
    function setDefaults(){
//     
        self.xii=document.getElementById("myAudio2");
        self.xii.controls = true;
        self.xii.load();
        var promiseii = self.xii.play();
        if (promiseii !== undefined) {
            promiseii.catch(error => {
                $.confirm({
                    title: 'Confirma!',
                    content: 'Este página quiere reproducir un sonido, está de acuerdo en reproducirlo?',
                    buttons: {
                        aceptar: function () {
                            self.xii.play();
                        },
                        cancelar: function () {
                            return;
                        }
                    }
                });
            }).then(() => {
               console.log("musica iniciada");
            });
        }
    };    
    /**************************************************************************/
    /********************************** METHODS *******************************/
    /**************************************************************************/
    
    /**************************************************************************/
    /******************************* SYNC METHODS *****************************/
    /**************************************************************************/ 
    
    /**************************************************************************/
    /******************************* DOM METHODS ******************************/
    /**************************************************************************/
        
    /**************************************************************************/
    /****************************** OTHER METHODS *****************************/
    /**************************************************************************/
    
};
$(document).ready(function() {
    
    window.Est=new Est();
//    window.onload=window.Est.load();
    
});