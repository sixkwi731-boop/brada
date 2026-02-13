# 📸 Como Adicionar Banners

## Passo a Passo Simples

### 1. Prepare seu banner

- Tamanho recomendado: **1200x600px** (ou proporção 2:1)
- Formato: JPG ou PNG
- Otimize para web (< 500KB se possível)

### 2. Adicione o arquivo

Copie seu banner para a pasta `public/`:

```
public/
└── banner.jpg  ← Cole seu arquivo aqui
```

### 3. Atualize o código

No arquivo `app/page.tsx`, linha ~29, substitua:

**DE:**

```tsx
<div className="mb-8 rounded-xl overflow-hidden bg-gradient-to-r from-[#01602a] to-[#78DE1F] flex items-center justify-center min-h-[300px]">
  {/* Temporário: ... */}
  <div className="text-center text-white p-8">
    <p className="text-2xl font-bold mb-2">📸 Seu Banner Aqui</p>
    <p className="text-sm opacity-90">
      Adicione o arquivo banner.jpg na pasta public/
    </p>
  </div>
</div>
```

**PARA:**

```tsx
<div className="mb-8 rounded-xl overflow-hidden">
  <img
    src="/banner.jpg"
    alt="Banner Bradesco"
    className="w-full h-auto object-cover"
  />
</div>
```

### 4. Salve e pronto!

O site vai recarregar automaticamente e mostrar seu banner.

## 🎨 Quer múltiplos banners?

Se quiser um carrossel como na Latam, me avise e eu implemento!

## 📐 Dicas de Design

- Use as cores do Bradesco: **#D63A59** (vermelho - rgb(214, 58, 89)) e **#FFFFFF** (branco)
- Mantenha o texto legível
- Teste em mobile e desktop
