const data={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};let selectionDesign=document.querySelector(".js-design"),selectionDesignButton=document.querySelector(".js-designButton"),selectionFill=document.querySelector(".js-fill"),selectionFillButton=document.querySelector(".js-fillButton"),messageFill=document.querySelector(".js-tooltipFill"),selectionShare=document.querySelector(".js-share"),selectionShareButton=document.querySelector(".js-shareButton");const form=document.querySelector(".js-form"),previewNameElemento=document.querySelector(".js-nameProfile"),previewRoleElemento=document.querySelector(".js-rolProfile"),previewPhoneElement=document.querySelector(".js-phone"),previewMailElement=document.querySelector(".js-mail"),previewLinkedinElement=document.querySelector(".js-linkedin"),previewGithubElement=document.querySelector(".js-github"),generalColors=document.querySelector(".js_generalcolor"),circleSocialnetwork=document.querySelectorAll(".container-profile__containerrrss__rrss"),profileName=document.querySelector(".profile__name");function collapseValidationDesign(){selectionDesign.classList.toggle("none"),selectionDesignButton.classList.toggle("arrowPointer")}function collapseValidationFill(e){!1===validationDesign?(messageFill.classList.toggle("none"),messageFill.style.top=e.clientY+"px",messageFill.style.left=e.clientX+"px",setTimeout((function(){messageFill.classList.toggle("none")}),3e3)):(selectionFill.classList.toggle("none"),selectionFillButton.classList.toggle("arrowPointer"))}function collapseValidationShare(){selectionShare.classList.toggle("none"),selectionShareButton.classList.toggle("arrowPointer")}selectionDesignButton.addEventListener("click",collapseValidationDesign),selectionFillButton.addEventListener("click",validateDesignSection),selectionFillButton.addEventListener("click",collapseValidationFill),selectionShareButton.addEventListener("click",collapseValidationShare);let validationDesign=!1;function validateDesignSection(){document.querySelectorAll('input[name="palette"]').forEach(e=>{e.checked&&(validationDesign=!0)})}function changedForm(e){const t=e.target.name,l=e.target.value;data[t]=l,console.log(data)}function refreshData(){previewNameElemento.innerHTML=""===data.name?"Nombre Apellido":data.name,previewRoleElemento.innerHTML=""===data.job?"Front-end developer":data.job,previewPhoneElement.href="https://api.whatsapp.com/send?phone="+data.phone,previewMailElement.href="mailto:"+data.email,previewLinkedinElement.href=data.linkedin,previewGithubElement.href=data.github}function handleChangeForm(e){handlerChangecolor(e),changedForm(e),refreshData()}function handlerChangecolor(e){const t=e.target.value;if("1"===t){previewNameElemento.style.color="#114e4e",profileName.style.borderLeft="#438792 solid 5px";for(let e=0;e<circleSocialnetwork.length;e++)circleSocialnetwork[e].style.border="#a2deaf solid 2px"}if("2"===t){previewNameElemento.style.color="#420101",profileName.style.borderLeft="#bd1010 solid 5px";for(let e=0;e<circleSocialnetwork.length;e++)circleSocialnetwork[e].style.border="#E95626 solid 2px"}if("3"===t){previewNameElemento.style.color="#EAB052",profileName.style.borderLeft="#bfcdd0 solid 5px";for(let e=0;e<circleSocialnetwork.length;e++)circleSocialnetwork[e].style.border="#d5d5d5 solid 2px"}}validateDesignSection(),form.addEventListener("change",handleChangeForm);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage);const createButton=document.querySelector(".js-create-card"),responseElement=document.querySelector(".js-response"),cardCreated=document.querySelector(".card--created");function handleClickCreate(e){e.preventDefault(),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",mode:"cors",body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{!1===e.success?(responseElement.classList.remove("none"),responseElement.innerHTML="Tienes que rellenar los campos"):(responseElement.innerHTML=`<a href='${e.cardURL}'>Dirección url</a>`,cardCreated.classList.remove("none"))}).catch(()=>{responseElement.innerHTML="Inténtalo más tarde."})}createButton.addEventListener("click",handleClickCreate);