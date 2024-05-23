import React, { useState } from 'react';
import styles from './CadastrarPaciente.module.css';
import ApiService from '../../../services/ApiService';
import ToastService from '../../../services/ToastService';

export default function CadastrarPaciente({ fechar }) {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [profissao, setProfissao] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [numeroResponsavel, setNumeroResponsavel] = useState('');
    const [documentoResponsavel, setDocumentoResponsavel] = useState('');
    const [grauDeParentesco, setGrauDeParentesco] = useState('');

    const validarDados = () => {
        if (!nome || !dataNascimento || !genero || !rg ||
            !cpf || !email || !telefone || !profissao ||
            !logradouro || !numero || !complemento || !cep ||
            !bairro || !cidade || !estado) {
            ToastService.Error('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }

        // Verifica idade
        const dataNascimentoDate = new Date(dataNascimento);
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
        const meses = hoje.getMonth() - dataNascimentoDate.getMonth();
        if (meses < 0 || (meses === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
            idade--;
        }

        if (idade < 18) {
            if (!nomeResponsavel || !numeroResponsavel || !documentoResponsavel || !grauDeParentesco) {
                ToastService.Error('Preencha os campos obrigatórios do responsável.');
                return false;
            }
        }

        return true;
    };

    const CadastrarPaciente = async () => {
        if (!validarDados()) return;


        try {
            const response = await ApiService.post('/Paciente/CadastrarPaciente', {
                nome,
                dataNascimento,
                rg,
                cpf,
                genero,
                email,
                telefone,
                profissao,
                logradouro,
                numero,
                complemento,
                cep,
                bairro,
                cidade,
                estado,
                nomeResponsavel,
                numeroResponsavel,
                documentoResponsavel,
                grauDeParentesco,

            });
            ToastService.Success('Paciente Cadastrado');
        } catch (error) {
            ToastService.Error('Houve um erro no servidor ao realizar o seu Cadastro.');
        }
    };



    return (
        <div className={styles.container}>
            <div>
                <div className={styles.header}>

                    <label className={styles.titleHeader}> Cadastrar Paciente </label>
                    <svg className={styles.closeIcon} onClick={fechar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
                <div>
                    <label className={styles.tituloCampos}> Informações básicas </label>
                    <div className={styles.inputContainer}>
                        <div className={styles.teste} >
                            <label>
                                Nome: *
                                <input className={styles.loginInput} value={nome} onChange={(e) => setNome(e.target.value)} />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput4}>
                                Data de Nascimento: *
                                <input className={styles.loginInput} value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} type="date" />
                            </label>

                            <label className={styles.dimensaoInput4}>
                                Gênero: *
                                <input className={styles.loginInput} value={genero} onChange={(e) => setGenero(e.target.value)} />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                RG: *
                                <input className={styles.loginInput} value={rg} onChange={(e) => setRg(e.target.value)} />
                            </label>
                            <label className={styles.dimensaoInput4}>
                                CPF: *
                                <input className={styles.loginInput} value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            </label>
                        </div>
                       
                        <div className={styles.organizacaocoluna}>

                            <label className={styles.dimensaoInput3}>
                                E-mail: *
                                <input className={styles.loginInput} value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>

                            <label className={styles.dimensaoInput3}>
                                Telefone: *
                                <input className={styles.loginInput} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Profissão: *
                                <input className={styles.loginInput} value={profissao} onChange={(e) => setProfissao(e.target.value)} />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label className={styles.tituloCampos} > Endereço </label>

                        <div className={styles.inputContainer}>

                            <div className={styles.organizacaocoluna} >


                                 <label className={styles.dimensaoInput4}>
                                    CEP: *
                                    <input className={styles.loginInput} value={cep} onChange={(e) => setCep(e.target.value)} />
                                </label>

                                <label className={styles.dimensaoLogradouro} >
                                    Logradouro: *
                                    <input className={styles.loginInput} value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />
                                </label>

                                <label className={styles.dimensaoInput4}>
                                    Número: *
                                    <input className={styles.loginInput} value={numero} onChange={(e) => setNumero(e.target.value)} />
                                </label>

                            </div>


                            <div className={styles.organizacaocoluna}>

                                <label className={styles.dimensaoInput4}>
                                    Complemento:
                                    <input className={styles.loginInput} value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                                </label>

                                <label className={styles.dimensaoInput4}>
                                    Bairro: *
                                    <input className={styles.loginInput} value={bairro} onChange={(e) => setBairro(e.target.value)} />
                                </label>


                                <label className={styles.dimensaoInput4}>
                                    Cidade: *
                                    <input className={styles.loginInput} value={cidade} onChange={(e) => setCidade(e.target.value)} />
                                </label>
                                <label className={styles.dimensaoInput4}>
                                    Estado: *
                                    <input className={styles.loginInput} value={estado} onChange={(e) => setEstado(e.target.value)} />
                                </label>
                            </div>

                        </div>

                    </div>
                </div>
                <div>
                    <label className={styles.tituloCampos} > Responsável/ Contato de emergência </label>
                    <div className={styles.inputContainer}>
                        <div>
                            <label>
                                Nome do Responsável:
                                <input className={styles.loginInput} value={nomeResponsavel} onChange={(e) => setNomeResponsavel(e.target.value)} />
                            </label>
                        </div>
                        <div className={styles.organizacaocoluna}>
                            <label className={styles.dimensaoInput3}>
                                Número do Responsável:
                                <input className={styles.loginInput} value={numeroResponsavel} onChange={(e) => setNumeroResponsavel(e.target.value)} />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Documento do Responsável:
                                <input className={styles.loginInput} value={documentoResponsavel} onChange={(e) => setDocumentoResponsavel(e.target.value)} />
                            </label>
                            <label className={styles.dimensaoInput3}>
                                Grau de Parentesco:
                                <input className={styles.loginInput} value={grauDeParentesco} onChange={(e) => setGrauDeParentesco(e.target.value)} />
                            </label>
                        </div>
                    </div>
                    <div className={styles.buttonAlinhamento}>

                        <div className={styles.buttonAlinhamento}>
                            <button onClick={CadastrarPaciente} className={styles.button}>Finalizar Cadastro</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
