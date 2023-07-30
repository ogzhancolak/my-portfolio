import { toast } from 'react-toastify';

export const redirecting = (link,text) => {
  toast.info(text,{ position: toast.POSITION.TOP_LEFT})
  let wi; 

      setTimeout(()=>{
        wi = window.open('about:blank', '_blank') ;
      },900)

      setTimeout(()=>{
      
      wi.location.href = link;
      },1200)  
  }

// export const redirecting = (link,text) => {
//   toast.info(text,{ position: toast.POSITION.TOP_LEFT})
//   setTimeout(()=>{
//     window.open(link, '_blank')
//    }, 2200);
// }


