import "./style.budget.css"
import React, { useState } from 'react';

const Budget = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [segmento, setSegmento] = useState('');
    const [comunicacao, setComunicacao] = useState('');
    const [fileSelected, setFileSelected] = useState(false);
    const [empresa, setEmpresa] = useState('');
    const [loc, setLoc] = useState('');
    const [filename, setFileName] = useState('');

    const validateNome = nome.length > 4;
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateCelular = celular.replace(/\D/g, '').length >= 10;
    const validateEmpresa = empresa.length > 3;
    const validateLoc = loc.length > 3;
    const handleFileChange = (e) => {
        setFileSelected(e.target.files.length > 0)

        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            console.log(file.name);
        } else {
            setFileName('');
        }
    };

    return (
        <div className="budget-container">
            <button className="budgetButton">SOLICITE SEU ORÇAMENTO</button>
            <div className="budget-text">
                <span className="budget-text">Vantagens para produzir com a Malharia Tropical</span>
            </div>
            <div className="budget-about">
                <div className="budget-about-item">
                    <img className="budgetAboutImg" src="https://static.wixstatic.com/media/03db72_1bf92f9d97274db29bae93a18b12557b~mv2.png/v1/fill/w_262,h_274,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ícone%20Prazo%202.png"></img>
                    <h3 className="titleBudgetAbout">PRAZO</h3>
                    <p style={{ color: "white" }}>Entendemos a importância do seu pedido/evento e cumprimos o prazo combinado.</p>
                </div>
                <div className="budget-about-item2">
                    <img className="budgetAboutImg2" src="https://static.wixstatic.com/media/03db72_da13ecccebe74b75a519bfd3bec1c8f5~mv2.png/v1/fill/w_256,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ícone%20Qualidade.png"></img>
                    <h3 className="titleBudgetAbout">PRAZO</h3>
                    <p className="titleCardBudget">Entendemos a importância do seu pedido/evento e cumprimos o prazo combinado.</p>
                </div>
                <div className="budget-about-item">
                    <img className="budgetAboutImg" src="https://static.wixstatic.com/media/03db72_1bf92f9d97274db29bae93a18b12557b~mv2.png/v1/fill/w_262,h_274,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ícone%20Prazo%202.png"></img>
                    <h3 className="titleBudgetAbout">PRAZO</h3>
                    <p style={{ color: "white" }}>Entendemos a importância do seu pedido/evento e cumprimos o prazo combinado.</p>
                </div>
                <div className="budget-about-item2">
                    <img className="budgetAboutImg2" src="https://static.wixstatic.com/media/03db72_da13ecccebe74b75a519bfd3bec1c8f5~mv2.png/v1/fill/w_256,h_224,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ícone%20Qualidade.png"></img>
                    <h3 className="titleBudgetAbout">PRAZO</h3>
                    <p className="titleCardBudget">Entendemos a importância do seu pedido/evento e cumprimos o prazo combinado.</p>
                </div>
            </div>
            <form className="budget-input-container">
                <fieldset className="budget-fieldset">
                    <div className="legendForm"><stron>Solicite seu orçamento!</stron></div>

                    <label className="budget-label">Nome *</label>
                    <input
                        type="text" value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className={nome ? (validateNome ? 'valid inputBudget' : 'invalid inputBudget') : 'inputBudget'}
                        placeholder="Digite seu nome"></input>

                    <label className="budget-label">E-mail *</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={email ? (validateEmail ? 'valid inputBudget' : 'invalid inputBudget') : 'inputBudget'}
                        type="email" placeholder="Digite seu e-mail"></input>

                    <label className="budget-label">Celular *</label>
                    <input
                        type="text"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        className={celular ? (validateCelular ? 'valid inputBudget' : 'invalid inputBudget') : 'inputBudget'}
                        placeholder="Digite seu celular"></input>

                    <label className="budget-label">Segmento *</label>
                    <select
                        value={segmento}
                        onChange={(e) => setSegmento(e.target.value)}
                        className={segmento ? 'valid selectForm' : 'selectForm'}
                    >
                        <option value="">Escolha uma opção</option>
                        <option value="1">Corporativo</option>
                        <option value="2">Escolar</option>
                        <option value="3">Esportivo</option>
                        <option value="4">Eventos</option>
                        <option value="5">Industrial</option>
                        <option value="6">Startup</option>
                        <option value="7">Universitário</option>
                    </select>

                    <label className="budget-label">Empresa ou Entidade Acadêmica *</label>
                    <input
                        type="text"
                        placeholder="Insira o nome"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className={empresa ? (validateEmpresa ? 'valid inputBudget' : 'invalid inputBudget') : 'inputBudget'}
                    />

                    <label className="budget-label">Localização</label>
                    <input
                        type="text"
                        placeholder="Digite sua localização"
                        value={loc}
                        onChange={(e) => setLoc(e.target.value)}
                        className={loc ? (validateLoc ? 'valid inputBudget' : 'invalid inputBudget') : 'inputBudget'}
                    />

                    <label className="budget-label">Qual quantidade você precisa? *</label>
                    <select
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        className={quantidade ? 'valid inputBudget' : 'inputBudget'}
                    >
                        <option value="">Escolha uma opção</option>
                        <option value="1">Abaixo de 30 peças</option>
                        <option value="2">30 a 59</option>
                        <option value="3">60 a 99</option>
                        <option value="4">100 a 149</option>
                        <option value="5">149 a 300</option>
                        <option value="6">Acima de 300</option>
                    </select>
                    <label className="budget-label">Quais produtos tem interesse? *</label>

                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="checkbox" name="produtos" value="camiseta" />
                        <span className="checkmark"></span>
                        Camiseta
                    </label>

                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="checkbox" name="produtos" value="camisa-polo" />
                        <span className="checkmark"></span>
                        Camisa Pólo
                    </label>

                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="checkbox" name="produtos" value="samba-shortdoll" />
                        <span className="checkmark"></span>
                        Samba e Short Doll
                    </label>

                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="checkbox" name="produtos" value="blusoes" />
                        <span className="checkmark"></span>
                        Blusões de Moletom
                    </label>

                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="checkbox" name="produtos" value="pijama" />
                        <span className="checkmark"></span>
                        Calça de Pijama
                    </label>

                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="checkbox" name="produtos" value="ecobags" />
                        <span className="checkmark"></span>
                        Ecobags
                    </label>

                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="checkbox" name="produtos" value="bones" />
                        <span className="checkmark"></span>
                        Bonés
                    </label>

                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="checkbox" name="produtos" value="outros" />
                        <span className="checkmark"></span>
                        Outros
                    </label>

                    <label className="budget-label">Tem prazo específico para a entrega das peças personalizadas? * </label>
                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="radio" name="produtos" value="outros" />
                        <span className="checkmark"></span>
                        Sim
                    </label>

                    <label class="checkbox-item">
                        <input style={{ display: "none" }} className="inputBudget" type="radio" name="produtos" value="outros" />
                        <span className="checkmark"></span>
                        Não
                    </label>

                    <label className="budget-label">Qual a data *</label>
                    <input className="inputBudget" type="date" placeholder="Selecione uma data"></input>

                    <label className="budget-label">Como você gostaria de ser contatado? *</label>
                    <select
                        value={comunicacao}
                        onChange={(e) => setComunicacao(e.target.value)}
                        className={comunicacao ? 'valid selectForm' : 'selectForm'}
                    >
                        <option value="">Escolha um meio de comunicação</option>
                        <option value="1">WhatsApp</option>
                        <option value="2">E-mail</option>
                        <option value="3">Telefone</option>
                        <option value="4">Qualquer uma das opções</option>
                    </select>

                    <label className="budget-label">Qual é seu projeto? *</label>
                    <textarea
                        name="projeto"
                        className="budget-project"
                        rows="5"
                        placeholder="Insira detalhes do seu projeto"
                    ></textarea>
                    <br />
                    <label
                        htmlFor="file-upload"
                        className={`budget-label-file ${fileSelected ? 'success' : ''}`}
                    >
                        <span className="budget-upload">
                            {filename || '+ Anexe seu logo, layout ou referências visuais'}
                        </span>
                    </label>
                    <input
                        className="budget-file inputBudget"
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        multiple
                    />

                    <p className="recomend">Recomendamos uma arte em alta qualidade</p>

                    <div className="containerButtonForm">
                        <button className="budgetButton">ENVIAR SOLICITAÇÃO</button>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}

export default Budget;