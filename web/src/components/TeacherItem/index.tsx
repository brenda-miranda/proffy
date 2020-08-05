import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
   return (
      <article className="teacher-item">
               <header>
                  <img src="https://avatars2.githubusercontent.com/u/42444221?s=460&u=2e920732b33d833fdd34f0a23c15264b9a52961a&v=4" alt="Brenda Miranda"/>
                  <div>
                     <strong>Brenda Miranda</strong>
                     <span>Química</span>
                  </div>
               </header>
               <p>
               Entusiasta das melhores tecnologias de química avançada.
               <br /> <br />
               Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
               </p>

               <footer>
                  <p>
                     Preço/Hora
                     <strong>R$ 60,00</strong>
                  </p>
                  <button>
                     <img src={whatsappIcon} alt="Whatsapp" />
                     Entrar em contato
                  </button>
               </footer>
            </article>
   );
}

export default TeacherItem;