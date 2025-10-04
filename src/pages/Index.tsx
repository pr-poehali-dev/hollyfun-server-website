import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [copiedIP, setCopiedIP] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText('RoomTime.gomc.me');
    setCopiedIP(true);
    setTimeout(() => setCopiedIP(false), 2000);
  };

  const privileges = [
    { name: 'Барон', price: 10, color: 'bg-stone-600' },
    { name: 'Страж', price: 16, color: 'bg-stone-500' },
    { name: 'Герой', price: 24, color: 'bg-blue-600' },
    { name: 'Аспид', price: 56, color: 'bg-purple-600' },
    { name: 'Сквид', price: 69, color: 'bg-cyan-600' },
    { name: 'Глава', price: 87, color: 'bg-indigo-600' },
    { name: 'Элита', price: 149, color: 'bg-pink-600' },
    { name: 'Титан', price: 239, color: 'bg-orange-600' },
    { name: 'Принц', price: 329, color: 'bg-yellow-600' },
    { name: 'Князь', price: 549, color: 'bg-red-600' },
    { name: 'Герцог', price: 999, color: 'bg-emerald-600' },
    { name: 'Спонсор', price: 1850, color: 'bg-amber-600' },
    { name: 'Мажор', price: 2650, color: 'bg-rose-600' },
  ];

  const rules = [
    {
      title: 'ОСНОВНЫЕ ПРАВИЛА',
      items: [
        'Незнание правил не освобождает вас от ответственности',
        'Начав играть на наших серверах, Вы автоматически подтверждаете своё согласие с данным сводом правил',
        'Администратор вправе наказать игрока по причине, не указанной в настоящих правилах',
        'Администрация не несет ответственности за временную или постоянную невозможность игры на сервере',
        'Администрация ведет логи всех действий игроков на сервере и всех сообщений чата',
      ],
    },
    {
      title: 'ПРАВИЛА ЧАТА',
      items: [
        'Запрещен Капс/Спам/Флуд в любом из чатов',
        'Запрещены унижения, оскорбления игроков',
        'Запрещена нецензурная лексика (маты, скрытые маты)',
        'Запрещено рекламировать/упоминать посторонние ресурсы',
        'Запрещено упоминать/оскорблять родных и близких игроков',
      ],
    },
    {
      title: 'ИГРОВЫЕ ПРАВИЛА',
      items: [
        'Запрещено мошенничество, обман администрации',
        'Запрещено продавать/покупать у игроков игровые ценности за реальную валюту',
        'Запрещено пользоваться читами, кликерами, автоматизациями',
        'Запрещено использование/скрытие багов/недоработок сервера',
        'Запрещено строительство половых органов, нацистских символик, лавакастов',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <header className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] pixel-font">
              HOLLYFUN
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-6 pixel-font-small">
              Лучший анархический Minecraft сервер
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <div 
                className="group bg-stone-800 border-4 border-stone-700 px-6 py-4 rounded-lg hover:border-green-500 transition-all cursor-pointer hover-scale"
                onClick={copyIP}
              >
                <div className="flex items-center gap-3">
                  <Icon name="Server" className="text-green-400" size={24} />
                  <div>
                    <p className="text-stone-400 text-sm">IP СЕРВЕРА:</p>
                    <p className="text-2xl font-bold text-white pixel-font-small">RoomTime.gomc.me</p>
                  </div>
                  <Icon 
                    name={copiedIP ? "Check" : "Copy"} 
                    className={copiedIP ? "text-green-400" : "text-stone-400"} 
                    size={20} 
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 border-2 border-blue-400 text-white font-bold px-8 py-6 text-lg hover-scale"
              >
                <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={20} />
                  Telegram
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 border-2 border-indigo-400 text-white font-bold px-8 py-6 text-lg hover-scale"
              >
                <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Discord
                </a>
              </Button>
            </div>
          </header>

          <Tabs defaultValue="shop" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 bg-stone-800 border-2 border-stone-700 p-2 h-auto">
              <TabsTrigger value="shop" className="pixel-font-small data-[state=active]:bg-green-600 data-[state=active]:text-white py-3">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Магазин
              </TabsTrigger>
              <TabsTrigger value="tokens" className="pixel-font-small data-[state=active]:bg-green-600 data-[state=active]:text-white py-3">
                <Icon name="Coins" size={16} className="mr-2" />
                Токены
              </TabsTrigger>
              <TabsTrigger value="rules" className="pixel-font-small data-[state=active]:bg-green-600 data-[state=active]:text-white py-3">
                <Icon name="ScrollText" size={16} className="mr-2" />
                Правила
              </TabsTrigger>
              <TabsTrigger value="about" className="pixel-font-small data-[state=active]:bg-green-600 data-[state=active]:text-white py-3">
                <Icon name="Info" size={16} className="mr-2" />
                О нас
              </TabsTrigger>
            </TabsList>

            <TabsContent value="shop" className="animate-fade-in">
              <h2 className="text-3xl font-bold text-center text-green-400 mb-8 pixel-font">Привилегии</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {privileges.map((priv, index) => (
                  <Card 
                    key={index} 
                    className="bg-stone-800/90 border-4 border-stone-700 hover:border-green-500 transition-all duration-300 hover-scale overflow-hidden"
                  >
                    <div className={`h-3 ${priv.color}`}></div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl text-white pixel-font-small flex items-center justify-between">
                        {priv.name}
                        <Icon name="Crown" size={24} className="text-yellow-400" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-stone-900 p-4 rounded border-2 border-stone-700">
                          <p className="text-3xl font-bold text-green-400 pixel-font">{priv.price}₽</p>
                        </div>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700 border-2 border-green-400 text-white font-bold py-6 pixel-font-small"
                        >
                          <Icon name="ShoppingBag" className="mr-2" size={18} />
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tokens" className="animate-fade-in">
              <div className="max-w-2xl mx-auto">
                <Card className="bg-stone-800/90 border-4 border-stone-700">
                  <CardHeader>
                    <CardTitle className="text-3xl text-green-400 pixel-font flex items-center gap-3">
                      <Icon name="Coins" size={32} className="text-yellow-400" />
                      Токены HollyFun
                    </CardTitle>
                    <CardDescription className="text-stone-300 text-lg">
                      Внутриигровая валюта сервера
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-stone-900 p-8 rounded-lg border-4 border-stone-700 text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center border-4 border-yellow-600">
                          <Icon name="Coins" size={32} className="text-yellow-900" />
                        </div>
                        <Icon name="ArrowRight" size={32} className="text-stone-500" />
                        <div className="text-5xl font-bold text-green-400 pixel-font">1₽</div>
                      </div>
                      <p className="text-stone-400 pixel-font-small">1 токен = 1 рубль</p>
                    </div>
                    
                    <div className="bg-stone-900/50 p-6 rounded-lg border-2 border-stone-700">
                      <h3 className="text-xl font-bold text-white mb-3 pixel-font-small">Что можно купить за токены:</h3>
                      <ul className="space-y-2 text-stone-300">
                        <li className="flex items-center gap-2">
                          <Icon name="Pickaxe" size={16} className="text-green-400" />
                          Игровые предметы и ресурсы
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Home" size={16} className="text-green-400" />
                          Приватные территории
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Zap" size={16} className="text-green-400" />
                          Уникальные возможности
                        </li>
                      </ul>
                    </div>

                    <Button 
                      className="w-full bg-yellow-600 hover:bg-yellow-700 border-2 border-yellow-400 text-white font-bold py-6 text-lg pixel-font-small"
                    >
                      <Icon name="ShoppingCart" className="mr-2" size={20} />
                      Купить токены
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="rules" className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-green-400 mb-8 pixel-font">Правила сервера</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {rules.map((section, idx) => (
                    <AccordionItem 
                      key={idx} 
                      value={`item-${idx}`}
                      className="bg-stone-800/90 border-4 border-stone-700 rounded-lg px-6 data-[state=open]:border-green-500"
                    >
                      <AccordionTrigger className="text-xl font-bold text-white hover:text-green-400 pixel-font-small">
                        <div className="flex items-center gap-3">
                          <Icon name="Shield" size={24} className="text-green-400" />
                          {section.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 mt-4">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3 text-stone-300">
                              <Icon name="ChevronRight" size={16} className="text-green-400 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="about" className="animate-fade-in">
              <div className="max-w-3xl mx-auto">
                <Card className="bg-stone-800/90 border-4 border-stone-700">
                  <CardHeader>
                    <CardTitle className="text-3xl text-green-400 pixel-font">О сервере HollyFun</CardTitle>
                    <CardDescription className="text-stone-300 text-lg">
                      Лучший анархический Minecraft сервер
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-stone-900 p-6 rounded-lg border-2 border-stone-700">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 pixel-font-small">
                        <Icon name="Users" size={24} className="text-green-400" />
                        Создатели сервера
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {['IIoneR', 'TukeInside', 'umQKoKiq'].map((creator, idx) => (
                          <Badge 
                            key={idx} 
                            className="bg-green-600 text-white px-4 py-2 text-lg border-2 border-green-400 pixel-font-small"
                          >
                            <Icon name="User" size={16} className="mr-2" />
                            {creator}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-stone-900 p-6 rounded-lg border-2 border-stone-700">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 pixel-font-small">
                        <Icon name="Gamepad2" size={24} className="text-green-400" />
                        Особенности сервера
                      </h3>
                      <ul className="space-y-3 text-stone-300">
                        <li className="flex items-center gap-2">
                          <Icon name="Swords" size={18} className="text-red-400" />
                          Полная анархия без ограничений
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Globe" size={18} className="text-blue-400" />
                          Открытый мир для всех игроков
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Zap" size={18} className="text-yellow-400" />
                          Система привилегий и токенов
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Shield" size={18} className="text-green-400" />
                          Активная модерация и защита
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        asChild 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 border-2 border-blue-400 text-white font-bold py-6 pixel-font-small"
                      >
                        <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                          <Icon name="Send" className="mr-2" size={20} />
                          Telegram канал
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 border-2 border-indigo-400 text-white font-bold py-6 pixel-font-small"
                      >
                        <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                          <Icon name="MessageCircle" className="mr-2" size={20} />
                          Discord сервер
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <footer className="mt-16 text-center text-stone-400 pb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="Copyright" size={16} />
              <p className="pixel-font-small">2024 HollyFun Minecraft Server</p>
            </div>
            <p className="text-sm">Создатели: IIoneR • TukeInside • umQKoKiq</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
