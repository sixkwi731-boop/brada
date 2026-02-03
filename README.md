# Site Localiza - Download de APK

Site para download do aplicativo Localiza, hospedado na Vercel.

## 🚀 Como Executar Localmente

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📱 Como Atualizar o APK Diariamente

### Método 1: Substitução Direta

1. Coloque o novo arquivo APK na pasta `public/` com o nome `app.apk`
2. Faça commit e push para o repositório:

```bash
# Copiar novo APK
cp /caminho/do/novo-app.apk public/app.apk

# Commit
git add public/app.apk
git commit -m "Atualiza APK - $(date +%Y-%m-%d)"

# Push (Vercel fará deploy automático)
git push
```

3. Aguarde 2-3 minutos para o deploy na Vercel

### Método 2: Arrastar e Soltar

1. Acesse a pasta `public/` no seu editor
2. Arraste o novo `app.apk` para substituir o antigo
3. Use o Git para fazer commit e push

## 🌐 Deploy na Vercel

### Primeiro Deploy

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o Vercel CLI (opcional):
```bash
npm install -g vercel
```

3. Conecte seu repositório GitHub à Vercel:
   - Acesse vercel.com/dashboard
   - Clique em "New Project"
   - Importe o repositório
   - A Vercel detecta Next.js automaticamente
   - Clique em "Deploy"

### Deploys Automáticos

Após configuração inicial, cada `git push` dispara um deploy automático.

## 📁 Estrutura do Projeto

```
locaiza/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Estilos globais
├── public/
│   └── app.apk          # Arquivo APK para download
├── package.json
├── next.config.js
└── README.md
```

## 🎨 Personalização

### Cores

Edite `app/page.tsx` e `app/globals.css` para alterar:
- Cores do gradiente de fundo
- Cor dos botões (classe `bg-green-500`)
- Cores do logo e textos

### Textos

Edite `app/page.tsx` para alterar:
- Número da solicitação
- Status ("Em andamento")
- Textos dos botões
- Mensagens informativas

### Logo

Substitua o texto "Localiza" no header por uma imagem:
```tsx
<img src="/logo.png" alt="Localiza" className="h-12" />
```

E adicione `logo.png` na pasta `public/`

## ⚠️ Observações Importantes

- **Tamanho do APK**: A Vercel (plano gratuito) suporta até 100MB por arquivo
- **Se APK > 50MB**: Considere usar Google Drive, GitHub Releases ou outro serviço de storage
- **Git LFS**: Para arquivos grandes, use Git Large File Storage
- **Performance**: Downloads são servidos via CDN da Vercel globalmente

## 🔧 Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização
- **Vercel** - Hospedagem e deploy

## 📞 Suporte

Para dúvidas sobre o deploy na Vercel, acesse: [vercel.com/docs](https://vercel.com/docs)
