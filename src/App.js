import { CampoTexto } from "./componentes/CampoTexto/CampoTexto.jsx";
import { Card } from "./componentes/Card/card.jsx";
import { Estilos } from "./componentes/EstilosGlobais/estilos.jsx";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema.jsx";
import { Tipografia } from "./componentes/Tipografia/Tipografia";

function App() {
    return (
        <ProvedorTema>
            <Estilos />
            <Card>
                <Tipografia varieante="h1" componente="h1">
                    Freelando
                </Tipografia>
                <Tipografia variante="body" componente="body" >
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. 
                </Tipografia>
                <CampoTexto titulo="Nome Completo"/>
            </Card>
        </ProvedorTema>
    );
}

export default App;
