<template>
  <div class="lg:w-2/3 w-4/5 mx-auto space-y-4 text-justify mb-8">
    <TermsSection v-for="(section, index) in termsInfo" :key="index" :title="section.title" :list="section.list" :content="section.content" class="mt-4" />
  </div>
</template>

<script setup lang="ts">
import TermsSection from '~/components/terms/termsSectionComponent.vue';

useSeoMeta({
  title: `GameOn! - Mentions légales`
});

const termsInfo = [
  {
    title: 'Propriétaire du site :',
    list: [
      'Nom du créateur : Charles BROUILLIER',
      'Email : brouilliercharles@gmail.com'
    ]
  },
  {
    title: 'Hébergeur du site :',
    list: [
      'Nom de l’hébergeur : Hostinger operations UAB',
      'Email : hostinger@hostinger.com',
      'Téléphone : +370.64503378'
    ]
  },
  {
    title: 'Propriété intellectuelle :',
    content: "Les images et fichiers PDF téléchargés sur ce site sont utilisés à des fins de démonstration et ne sont pas destinés à des fins commerciales. Si vous êtes propriétaire de l’un des contenus mis à disposition et souhaitez qu’il soit retiré, veuillez nous contacter à l’adresse suivante : brouilliercharles@gmail.com"
  },
  {
    title: 'Limitation de responsabilité :',
    content: "Charles BROUILLIER s’efforce d’assurer la véracité et la mise à jour des informations publiées sur ce site. Cependant, des erreurs ou omissions peuvent subsister. Charles BROUILLIER ne pourra être tenu responsable des conséquences directes ou indirectes d’une utilisation des informations disponibles sur ce site. Les liens hypertextes présents sur le site peuvent conduire à d’autres sites internet. Charles BROUILLIER décline toute responsabilité quant au contenu de ces sites."
  }
];

</script>