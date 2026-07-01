// npm install recharts


function DashBoard() {
    // Estados para guardar os totais (futuramente vindos das suas APIs)

    return (

        <div>
            dashboard
        </div>
        
    );
}

export default DashBoard;






// npm install recharts
// import { useEffect, useState } from "react";
// import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// function DashBoard() {
//     // Estados para guardar os totais (futuramente vindos das suas APIs)
//     const [metricas, setMetricas] = useState({
//         totalTarefas: 2,
//         tarefasConcluidas: 8,
//         totalProjetos: 4,
//         projetosAtivos: 3
//     });

//     // Dados fictícios para o Gráfico de Barras (Tarefas por Status)
//     const dadosGerais = [
//         { name: "Projetos", Total: 4, Ativos: 3 },
//         { name: "Tarefas", Total: 12, Concluidas: 8 }
//     ];

//     // Dados fictícios para o Gráfico de Pizza (Prioridade das Tarefas)
//     const dadosPrioridade = [
//         { name: "Alta", value: 3, color: "#dc3545" },    // Vermelho (danger)
//         { name: "Média", value: 5, color: "#ffc107" },   // Amarelo (warning)
//         { name: "Baixa", value: 4, color: "#198754" }    // Verde (success)
//     ];

//     // Calcula a porcentagem de progresso geral das tarefas
//     const porcentagemConclusao = Math.round((metricas.tarefasConcluidas / metricas.totalTarefas) * 100) || 0;

//     return (
//         <Container className="mt-4">
//             {/* TÍTULO DO PAINEL */}
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h2 className="mb-0 fs-3 fw-bold text-dark">📊 Indicadores de Desempenho</h2>
//                 <span className="text-muted fw-semibold">Visão Geral do Sistema</span>
//             </div>

//             {/* SEÇÃO 1: CARDS DE MÉTRICAS RÁPIDAS */}
//             <Row className="g-3 mb-4">
//                 <Col xs={12} sm={6} md={3}>
//                     <Card className="shadow-sm border-0 bg-dark text-white">
//                         <Card.Body className="py-4">
//                             <h6 className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.75rem' }}>Total de Projetos</h6>
//                             <h2 className="mb-0 fw-bold">{metricas.totalProjetos}</h2>
//                             <small className="text-primary fw-semibold">📂 Projetos no sistema</small>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col xs={12} sm={6} md={3}>
//                     <Card className="shadow-sm border-0 border-start border-primary border-4">
//                         <Card.Body className="py-4">
//                             <h6 className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.75rem' }}>Projetos Ativos</h6>
//                             <h2 className="mb-0 fw-bold text-primary">{metricas.projetosAtivos}</h2>
//                             <small className="text-muted fw-semibold">⚡ Em andamento</small>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col xs={12} sm={6} md={3}>
//                     <Card className="shadow-sm border-0 border-start border-warning border-4">
//                         <Card.Body className="py-4">
//                             <h6 className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.75rem' }}>Total de Tarefas</h6>
//                             <h2 className="mb-0 fw-bold text-warning">{metricas.totalTarefas}</h2>
//                             <small className="text-muted fw-semibold">📝 Demandas criadas</small>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col xs={12} sm={6} md={3}>
//                     <Card className="shadow-sm border-0 border-start border-success border-4">
//                         <Card.Body className="py-4">
//                             <h6 className="text-uppercase text-muted fw-bold mb-1" style={{ fontSize: '0.75rem' }}>Progresso de Tarefas</h6>
//                             <h2 className="mb-0 fw-bold text-success">{porcentagemConclusao}%</h2>
//                             <ProgressBar variant="success" now={porcentagemConclusao} className="mt-2" style={{ height: '6px' }} />
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//             {/* SEÇÃO 2: GRÁFICOS VISUAIS */}
//             <Row className="g-4">
//                 {/* Gráfico 1: Barras Comparativas */}
//                 <Col xs={12} lg={7}>
//                     <Card className="shadow-sm border-0">
//                         <Card.Header className="bg-white py-3 fw-bold text-secondary">
//                             📈 Visão Geral: Projetos vs Tarefas
//                         </Card.Header>
//                         <Card.Body style={{ height: "300px" }}>
//                             <ResponsiveContainer width="100%" height="100%">
//                                 <BarChart data={dadosGerais} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
//                                     <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                                     <XAxis dataKey="name" stroke="#6c757d" />
//                                     <YAxis stroke="#6c757d" />
//                                     <Tooltip />
//                                     <Legend />
//                                     <Bar dataKey="Total" fill="#212529" radius={[4, 4, 0, 0]} />
//                                     <Bar dataKey="Ativos" fill="#0d6efd" radius={[4, 4, 0, 0]} />
//                                     <Bar dataKey="Concluidas" fill="#198754" radius={[4, 4, 0, 0]} />
//                                 </BarChart>
//                             </ResponsiveContainer>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 {/* Gráfico 2: Pizza de Prioridades */}
//                 <Col xs={12} lg={5}>
//                     <Card className="shadow-sm border-0">
//                         <Card.Header className="bg-white py-3 fw-bold text-secondary">
//                             🎯 Distribuição de Prioridades (Tarefas)
//                         </Card.Header>
//                         <Card.Body style={{ height: "300px" }} className="d-flex align-items-center justify-content-center">
//                             <ResponsiveContainer width="100%" height="100%">
//                                 <PieChart>
//                                     <Pie
//                                         data={dadosPrioridade}
//                                         cx="50%"
//                                         cy="50%"
//                                         innerRadius={60}
//                                         outerRadius={80}
//                                         paddingAngle={5}
//                                         dataKey="value"
//                                     >
//                                         {dadosPrioridade.map((entry, index) => (
//                                             <Cell key={`cell-${index}`} fill={entry.color} />
//                                         ))}
//                                     </Pie>
//                                     <Tooltip />
//                                     <Legend iconType="circle" layout="vertical" align="right" verticalAlign="middle" />
//                                 </PieChart>
//                             </ResponsiveContainer>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default DashBoard;