import React from 'react';
import Descriptions from '../../components/Descriptions';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { PAGES } from '../../helpers';

const About = () => {
  return(
    <>
    <Header page={PAGES.about}/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio excepturi assumenda tenetur maxime esse quidem explicabo quasi molestias velit quas, nemo porro suscipit, enim doloribus autem voluptates at deserunt ipsum!
    Accusamus, harum placeat? Sint, omnis voluptate rerum consequuntur aut dolorum! Unde, reiciendis saepe hic minus modi, esse nostrum a vitae alias laboriosam quis optio ex voluptate, nulla deleniti voluptatum doloremque.
    Aliquam maxime expedita cupiditate temporibus ab doloribus quos. Exercitationem consequuntur quasi explicabo numquam incidunt veritatis, sequi esse, eum dolorum nostrum saepe ab doloribus totam repudiandae veniam assumenda facilis suscipit optio?
    Corrupti non incidunt, illum quos consequuntur exercitationem aspernatur quidem a laborum commodi, autem nobis culpa, odit corporis quasi eos pariatur. Magni, laborum id fugit molestiae quae quidem illo illum ab?
    Eius ullam laborum enim pariatur? Animi iusto id tempora eius hic! Amet ex magnam numquam praesentium quaerat dolor consequuntur autem iste nemo? Dignissimos eius, libero quas omnis illum veritatis sunt?</p>
    <p>O Czechitas: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minima ratione nulla iusto nostrum? Corporis, reiciendis repellat! Doloremque dolores cumque, repudiandae fugiat quo culpa et sed, iusto, soluta illum ad!
    Quibusdam aliquam cumque commodi nisi, hic doloribus. Recusandae laudantium consequatur obcaecati quis praesentium, laborum maxime aut. Earum odit incidunt illo in, tempore, ipsa officia inventore accusamus fuga quos maiores amet.
    In debitis placeat saepe cum officia accusantium deleniti animi corrupti magni numquam, repudiandae error nesciunt ea, perspiciatis dignissimos beatae consequuntur itaque sequi! Inventore ipsa fuga harum nulla facilis exercitationem vitae.</p>
    <Footer fixedbottom={true}/>
    </>
  );
};

export default About;