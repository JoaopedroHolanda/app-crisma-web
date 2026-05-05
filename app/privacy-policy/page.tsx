import LegalDocument from '@/components/legal/LegalDocument';

const PRIVACY_SECTIONS = [
  {
    title: '1. Informações que coletamos',
    paragraphs: [
      'Podemos coletar dados fornecidos no cadastro, como nome completo, data de nascimento, celular, e-mail, senha, tipo de cadastro e turma vinculada.',
      'Também poderemos coletar informações de uso necessárias para manter a segurança, estabilidade e funcionamento do aplicativo.',
    ],
  },
  {
    title: '2. Como usamos seus dados',
    paragraphs: [
      'Os dados são utilizados para identificar usuários, organizar turmas, gerenciar perfis de acesso e apoiar atividades relacionadas à crisma.',
      'Não utilizamos os dados para venda de informações pessoais ou publicidade de terceiros.',
    ],
  },
  {
    title: '3. Compartilhamento de dados',
    paragraphs: [
      'As informações podem ser acessadas por pessoas autorizadas pela coordenação da crisma, conforme a necessidade de organização pastoral e administrativa.',
      'Podemos compartilhar dados quando houver obrigação legal, ordem de autoridade competente ou necessidade de proteger direitos e segurança dos usuários.',
    ],
  },
  {
    title: '4. Segurança',
    paragraphs: [
      'Adotaremos medidas técnicas e organizacionais razoáveis para proteger os dados cadastrados no aplicativo.',
      'Apesar dos cuidados, nenhum sistema é totalmente imune a riscos. Por isso, o usuário também deve proteger sua senha e evitar compartilhar acessos.',
    ],
  },
  {
    title: '5. Retenção e atualização',
    paragraphs: [
      'Os dados podem ser mantidos enquanto forem necessários para as finalidades do aplicativo ou para cumprimento de obrigações legais e administrativas.',
      'O usuário pode solicitar correção ou atualização de suas informações junto à equipe responsável pelo Crisma App.',
    ],
  },
  {
    title: '6. Direitos do usuário',
    paragraphs: [
      'O usuário pode solicitar informações sobre o tratamento de seus dados, bem como pedir correção, atualização ou exclusão quando aplicável.',
      'As solicitações serão avaliadas de acordo com as necessidades do serviço, regras internas e legislação aplicável.',
    ],
  },
  {
    title: '7. Contato',
    paragraphs: [
      'Dúvidas sobre privacidade ou tratamento de dados devem ser encaminhadas para a equipe responsável pelo Crisma App ou para a coordenação da crisma.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Política de Privacidade"
      updatedAt="05/05/2026"
      sections={PRIVACY_SECTIONS}
    />
  );
}
