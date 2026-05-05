import LegalDocument from '@/components/legal/LegalDocument';

const TERMS_SECTIONS = [
  {
    title: '1. Aceite dos termos',
    paragraphs: [
      'Ao acessar ou utilizar o Crisma App, você declara que leu, entendeu e concorda com estes Termos de Uso. Caso não concorde, não utilize o aplicativo.',
      'O Crisma App está em desenvolvimento e pode receber ajustes de funcionalidades, telas e regras de uso ao longo do tempo.',
    ],
  },
  {
    title: '2. Objetivo do aplicativo',
    paragraphs: [
      'O Crisma App tem como objetivo apoiar a organização pastoral da crisma, facilitando cadastros, acompanhamento de turmas, frequência, avisos e demais rotinas relacionadas.',
      'Na versão inicial, o aplicativo será utilizado principalmente para cadastro e organização de catequistas.',
    ],
  },
  {
    title: '3. Cadastro e responsabilidades do usuário',
    paragraphs: [
      'O usuário deve fornecer informações verdadeiras, completas e atualizadas ao realizar seu cadastro.',
      'O usuário é responsável por manter a confidencialidade de sua senha e por qualquer atividade realizada em sua conta.',
      'Não é permitido usar o aplicativo para inserir informações falsas, ofensivas, indevidas ou que violem direitos de terceiros.',
    ],
  },
  {
    title: '4. Uso adequado',
    paragraphs: [
      'O Crisma App deve ser utilizado apenas para fins relacionados à organização da crisma e atividades autorizadas pela coordenação responsável.',
      'Podemos restringir ou remover acessos caso sejam identificados usos indevidos, tentativa de violação de segurança ou descumprimento destes termos.',
    ],
  },
  {
    title: '5. Disponibilidade e alterações',
    paragraphs: [
      'Buscaremos manter o aplicativo disponível, mas não garantimos funcionamento contínuo, livre de erros ou interrupções.',
      'Podemos alterar, suspender ou remover funcionalidades conforme necessidades técnicas, pastorais ou administrativas.',
    ],
  },
  {
    title: '6. Contato',
    paragraphs: [
      'Dúvidas sobre estes Termos de Uso devem ser encaminhadas para a equipe responsável pelo Crisma App ou para a coordenação da crisma.',
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalDocument
      title="Termos de Uso"
      updatedAt="05/05/2026"
      sections={TERMS_SECTIONS}
    />
  );
}
