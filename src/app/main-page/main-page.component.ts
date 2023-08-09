import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  step = 'chooseYourChatBot'

  @ViewChild('fileInput') fileInput!: any;
  selectedFile: File | null = null;

  dadosDoArquivo: any;

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
      this.onFileSelected(event)
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onFileSelected(event: any) {
    try {
      const inputElement: HTMLInputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        const file: File = inputElement.files[0];
        const fileReader: FileReader = new FileReader();

        fileReader.onload = (e) => {
          const contents: string | ArrayBuffer | null = fileReader.result;
          if (typeof contents === 'string' && contents !== null) {
            const jsonData = JSON.parse(contents);
            this.dadosDoArquivo = jsonData
          }
        };
        fileReader.readAsText(file);
      }
    } catch (e) {
      return e
    }

  }

  chooseTheBoxes() {
    this.dadosDoArquivo = {
      "flow": {
        "onboarding": {
          "$contentActions": [
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "6ddafd3b-2a8c-487c-b6a0-cc67af1a3fc8",
                    "type": "text/plain",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": false,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "welcome",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    ".*"
                  ]
                }
              ],
              "$id": "84447ec0-c5a3-4730-a9c9-ee9d21d7364e",
              "$connId": "con_3",
              "$invalid": false,
              "typeOfStateId": "state"
            }
          ],
          "$enteringCustomActions": [],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [],
          "id": "onboarding",
          "root": true,
          "$title": "Início",
          "$position": {
            "top": "133px",
            "left": "753px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "fallback": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "fa9b5f40-4da9-4ace-b34a-5acb0db2b33b",
                    "type": "text/plain",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "8feebdee-1e2b-4041-a5fd-17e94bb8d026",
              "typeOfStateId": "state",
              "$connId": "con_8",
              "$id": "c0747cfb-769a-49b0-aabb-b25c7ada7486",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "contains",
                  "values": [
                    "video"
                  ],
                  "variable": "input.content@type"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "8fbd17bf-b21e-448f-82b1-bf989c60133e",
              "typeOfStateId": "state",
              "$connId": "con_13",
              "$id": "72923a3b-e8de-495a-9b20-b8bcdc8bf80a",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "contains",
                  "values": [
                    "audio"
                  ],
                  "variable": "input.content@type"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "8236c51a-fff1-4ad4-97c4-0841661e5dab",
              "typeOfStateId": "state",
              "$connId": "con_18",
              "$id": "32572998-007c-4ee1-a2f9-a4a04e40e1f5",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "contains",
                  "values": [
                    "image"
                  ],
                  "variable": "input.content@type"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "5e59ed65-1db2-4f05-af11-397e94381514",
              "typeOfStateId": "state",
              "$connId": "con_23",
              "$id": "12a9f1d2-bef1-47eb-80d0-8c7839cb3a15",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "notEquals",
                  "values": [
                    "text/plain"
                  ],
                  "variable": "input.type"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "b1ecaba1-e7d7-4ec1-8aa6-994f40fa36be",
              "typeOfStateId": "state",
              "$connId": "con_28",
              "$id": "e7e110a5-0a43-4505-83f3-bccd486b0055",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "greaterThanOrEquals",
                  "values": [
                    "3"
                  ],
                  "variable": "numErro"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "9052b115-4a1c-4527-9eee-28803c74b8cc",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável",
              "$invalid": false,
              "settings": {
                "variable": "statePreviousId",
                "value": "{{state.previous.id}}"
              },
              "conditions": []
            },
            {
              "$id": "996a37f5-321a-4850-b53c-76d9d44475ed",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get num erro",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(numErro) {\n\ttry{\n\t\treturn numErro + 1\n\t}catch(e){}\n}",
                "inputVariables": [
                  "numErro"
                ],
                "outputVariable": "numErro",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "803c3a1e-5f20-40e9-8561-0eea507afadb",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "fallback",
          "$title": "Exceções",
          "$position": {
            "top": "43.6667px",
            "left": "2255px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "welcome": {
          "$contentActions": [
            {
              "action": {
                "$id": "bf7e1db2-95c2-4de9-a5b7-ac63a281fe22",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "4ca63f1e-7ca7-415d-8c66-f2d12ea7f8f2",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "4ca63f1e-7ca7-415d-8c66-f2d12ea7f8f2",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "6acd90a5-7155-4edd-8c63-960a21ff461d",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "f3d846c5-d059-42f9-bc12-daedf8b3559d",
                  "type": "text/plain",
                  "content": "Olá, eu sou a Isa, assistente virtual da *Pró-Corpo Estética*! 💜\n\nPor aqui consigo te ajudar a conhecer nossos procedimentos, fazer agendamentos, tirar dúvidas e muito mais! 😁",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "f3d846c5-d059-42f9-bc12-daedf8b3559d",
                    "type": "text/plain",
                    "content": "Olá, eu sou a Isa, assistente virtual da *Pró-Corpo Estética*! 💜\n\nPor aqui consigo te ajudar a conhecer nossos procedimentos, fazer agendamentos, tirar dúvidas e muito mais! 😁"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "95e5db63-bece-41e0-af7d-140ebf538b7d",
                    "type": "text/plain",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "e6d5e718-b010-4977-8abe-7939c1c8361c",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get phone",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n            function run(identity) {\n                try {\n                    let phone = identity.split('@');\n\n                    return phone[0];\n                } catch(e) {\n                    return identity;\n                }\n            }",
                "inputVariables": [
                  "contact.identity"
                ],
                "outputVariable": "userPhone",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "fb97299a-907f-4aa1-9183-6aa44fedc541",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - save phone",
              "$invalid": false,
              "settings": {
                "extras": {
                  "userPhone": "{{userPhone}}"
                },
                "phoneNumber": "{{userPhone}}"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "15dd0585-874c-4607-82e7-838c1251ab47",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "welcome",
          "$title": "Boas vindas",
          "$position": {
            "top": "256px",
            "left": "752px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "b70d2dc3-8942-4f50-9713-c081048f2a11": {
          "$contentActions": [
            {
              "action": {
                "$id": "e311fdca-806f-42b0-a76a-78fc3b5d7579",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "64821a79-a356-4f7f-9327-10fd81cc5646",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "64821a79-a356-4f7f-9327-10fd81cc5646",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "a9c5acf2-a6f4-48f6-9fd5-2819a3de286d",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "fdc31a26-ff9b-46ad-8ddd-0920bebfff1b",
                  "type": "text/plain",
                  "content": "Olá, que bom que você voltou! 💜",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "fdc31a26-ff9b-46ad-8ddd-0920bebfff1b",
                    "type": "text/plain",
                    "content": "Olá, que bom que você voltou! 💜"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "40b46dab-aa9f-4df9-adf9-fb4478f0e9b4",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "765f889d-63c6-4b8b-a8af-92d9b2bf8b45",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Recomeco nao cliente",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "473dcfb5-5f5c-4e24-8d4c-62d14b5b82b6",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "b70d2dc3-8942-4f50-9713-c081048f2a11",
          "root": false,
          "$title": "Recomeco sem nome",
          "$position": {
            "top": "301px",
            "left": "275px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "9dbf18b1-4866-4d81-a4ae-e1317a0289eb": {
          "$contentActions": [
            {
              "action": {
                "$id": "62f4212d-fe56-45e0-b076-45a20717140b",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "f86beb11-b790-4f78-be27-eafc3bc683d4",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "f86beb11-b790-4f78-be27-eafc3bc683d4",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "ed7326e2-e540-4b57-a79d-387cc0173927",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "c59dd2e2-78c2-4fc6-9c60-3c1f46001698",
                  "type": "text/plain",
                  "content": "Olá, {{contact.name}}! É sempre um prazer conversar com você! \n\nLembra de mim? Eu sou a Isa, assistente virtual da *Pró-Corpo Estética*! 💜",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "c59dd2e2-78c2-4fc6-9c60-3c1f46001698",
                    "type": "text/plain",
                    "content": "Olá, {{contact.name}}! É sempre um prazer conversar com você! \n\nLembra de mim? Eu sou a Isa, assistente virtual da *Pró-Corpo Estética*! 💜"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "b6056cf8-cff6-4d6e-9bc9-6369f89ca1b2",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "7a3223d9-38c6-4e58-8fcd-40f831d5cc3a",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Recomeco cliente",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "9dbf18b1-4866-4d81-a4ae-e1317a0289eb",
          "root": false,
          "$title": "Recomeco com nome",
          "$position": {
            "top": "307px",
            "left": "529.25px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "15dd0585-874c-4607-82e7-838c1251ab47": {
          "$contentActions": [
            {
              "action": {
                "$id": "0c8be735-f15b-4735-9a87-43f291e6219c",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "438b9d26-647b-4be4-800e-0d873c7e0447",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "438b9d26-647b-4be4-800e-0d873c7e0447",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "b5904026-8b97-4f02-9a14-78ffdc918b74",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "b600aa8d-ac48-4c1f-b9dc-f063b3855a51",
                  "type": "text/plain",
                  "content": "A *Pró-Corpo Estética* está em conformidade com a Lei Geral de Proteção de Dados (LGPD).  \n\nSeus dados estarão protegidos e serão usados somente para te dar o melhor atendimento. 💜\n\nConversando comigo você vai estar de acordo com a nossa *Política de Privacidade*, descrita no link abaixo.👇\n\nhttps://www.procorpoestetica.com.br/politica-privacidade",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "b600aa8d-ac48-4c1f-b9dc-f063b3855a51",
                    "type": "text/plain",
                    "content": "A *Pró-Corpo Estética* está em conformidade com a Lei Geral de Proteção de Dados (LGPD).  \n\nSeus dados estarão protegidos e serão usados somente para te dar o melhor atendimento. 💜\n\nConversando comigo você vai estar de acordo com a nossa *Política de Privacidade*, descrita no link abaixo.👇\n\nhttps://www.procorpoestetica.com.br/politica-privacidade"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "d9e4dfd5-f77a-4210-b6b7-a5ab6c7d5f39",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "aa544441-2ed5-4e98-9a36-838f7582585b",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Politica de privacidade",
                "action": "{{contact.identity}}"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "e28db2f0-9e96-47b9-a401-8b2036b55d53",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "15dd0585-874c-4607-82e7-838c1251ab47",
          "root": false,
          "$title": "Politica de privacidade",
          "$position": {
            "top": "356px",
            "left": "749px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "e28db2f0-9e96-47b9-a401-8b2036b55d53": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "a85d19f0-e9a4-4e6a-95fd-683e0c362fe2",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "da666519-8c50-4628-a391-59a23db1ca6c",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Aceitou lgpd",
                "action": "{{contact.identity}}"
              },
              "conditions": []
            },
            {
              "$id": "2d617c4e-40ed-4328-b4fe-b700ddcb699b",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Aceitou lgpd",
                "action": "Exibicao"
              },
              "conditions": []
            },
            {
              "$id": "31cb1d9b-6518-4b75-8cb6-fab3de3c2295",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - accepted terms",
              "$invalid": false,
              "settings": {
                "extras": {
                  "acceptedTerms": "true"
                }
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "473dcfb5-5f5c-4e24-8d4c-62d14b5b82b6",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "e28db2f0-9e96-47b9-a401-8b2036b55d53",
          "root": false,
          "$title": "Aceitou lgpd",
          "$position": {
            "top": "487.25px",
            "left": "745px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "473dcfb5-5f5c-4e24-8d4c-62d14b5b82b6": {
          "$contentActions": [
            {
              "action": {
                "$id": "6a685071-6c8f-4236-9d5b-9d6dc56a326b",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "aec35df4-c16f-4e39-a581-367ef41f39ca",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "aec35df4-c16f-4e39-a581-367ef41f39ca",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "d19eca5f-50d8-464c-838d-54dd235a86e2",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "beaa3787-3cbb-4946-aa4a-8ae2af389556",
                  "type": "text/plain",
                  "content": "Antes de começar, me informa seu *nome* e *sobrenome*?\n\n👉 _Exemplo: Maria Silva_",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "beaa3787-3cbb-4946-aa4a-8ae2af389556",
                    "type": "text/plain",
                    "content": "Antes de começar, me informa seu *nome* e *sobrenome*?\n\n👉 _Exemplo: Maria Silva_"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "60774f70-9536-4ce4-bf40-069b7b76a95e",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "userName"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false,
                "variable": "userName"
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "c6f4f2a5-e95d-4c45-b608-7c7d486ec06e",
              "typeOfStateId": "state",
              "$connId": "con_33",
              "$id": "ab2fe813-25e6-4e0f-a443-20e05c1add23",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "false"
                  ],
                  "variable": "isNameValid"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "2f254ed8-5a1e-4ccf-98be-f3bf0f106375",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Colhe nome",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "96d19429-5e74-4802-b6dc-fd32c5a92ba4",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Colhe nome conteudo",
                "action": "{{input.content}}"
              },
              "conditions": []
            },
            {
              "$id": "c691e2be-d91a-421a-9ca9-40183bb13f28",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "Requisição HTTP - get is valid name",
              "$invalid": false,
              "settings": {
                "headers": {},
                "method": "GET",
                "uri": "https://check-name.herokuapp.com/verify/{{input.content}}",
                "responseStatusVariable": "getValidNameStatus",
                "responseBodyVariable": "getValidNameResponse"
              },
              "conditions": []
            },
            {
              "$id": "fb6abbbd-2efe-48a0-b866-7c427aedaf75",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get is name valid",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(getName) {\n\ttry{\n\t\tname = JSON.parse(getName)\n\n\t\tif(name.score > 0.5){\n\t\t\treturn true\n\t\t}\n\n\t\treturn false\n\t}catch(e){}\n}",
                "inputVariables": [
                  "getValidNameResponse"
                ],
                "outputVariable": "isNameValid",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "ffe865cb-00ff-4b8b-ae40-92a1cb5b5dfc",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - save name",
              "$invalid": false,
              "settings": {
                "extras": {
                  "userName": "{{input.content}}"
                },
                "name": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [
                    "true"
                  ],
                  "source": "context",
                  "comparison": "equals",
                  "variable": "isNameValid"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "38b71af3-a8be-4a99-8bdb-55b64fb55e62",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "473dcfb5-5f5c-4e24-8d4c-62d14b5b82b6",
          "root": false,
          "$title": "Colhe nome",
          "$position": {
            "top": "620.25px",
            "left": "742px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "38b71af3-a8be-4a99-8bdb-55b64fb55e62": {
          "$contentActions": [
            {
              "action": {
                "$id": "65d988c4-b172-4641-9760-779c324f5482",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "eefd8b7c-b723-41dd-89f5-c839e450e79b",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "eefd8b7c-b723-41dd-89f5-c839e450e79b",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "c4830fb9-b79a-46c4-8acc-7d59b2e163de",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "93771537-9829-444b-9979-c1d88773deb0",
                  "type": "text/plain",
                  "content": "Prazer, {{userName}}! 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "93771537-9829-444b-9979-c1d88773deb0",
                    "type": "text/plain",
                    "content": "Prazer, {{userName}}! 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "fe82fcd8-2236-4921-9046-7313764877bb",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "dd9cb466-62c1-4ede-961c-3ec65f82a705",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Saudacao",
                "action": "{{contact.identity}}"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "52b31d32-bb47-43c7-a4c2-fc82ce681bc6",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "38b71af3-a8be-4a99-8bdb-55b64fb55e62",
          "root": false,
          "$title": "Saudacao",
          "$position": {
            "top": "745px",
            "left": "739px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "aa8a8dd1-2d06-4c18-8b39-40cf3f760da5": {
          "$contentActions": [
            {
              "action": {
                "$id": "b8a06571-236d-426d-ae26-94a571f5bcb1",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "812f9c06-24a2-4b2e-b0d2-8114746becc4",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "812f9c06-24a2-4b2e-b0d2-8114746becc4",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "3791ad41-feaf-41f5-bd0f-7343b8a528d3",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "be43fd09-b122-4d88-8420-20bd25e57d9f",
                  "type": "text/plain",
                  "content": "{{generalAlertMessage}}",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "be43fd09-b122-4d88-8420-20bd25e57d9f",
                    "type": "text/plain",
                    "content": "{{generalAlertMessage}}"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "6cf31331-62f1-47c5-9ff7-5f1a2495cce8",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "136cf15c-c34b-47b1-a38f-f19e1e2409ae",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "136cf15c-c34b-47b1-a38f-f19e1e2409ae",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "8254382a-3b46-46e5-afaf-d1e6c6ea2dd8",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "4b7077ba-1afd-47f8-92c8-a1facf4c42e3",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "Deseja prosseguir e falar com um de nossos especialistas?",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Sim",
                        "previewText": "Sim",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Não",
                        "previewText": "Não",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ]
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "4b7077ba-1afd-47f8-92c8-a1facf4c42e3",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "Deseja prosseguir e falar com um de nossos especialistas?",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Sim",
                          "previewText": "Sim",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Não",
                          "previewText": "Não",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ]
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "4db0759e-2af6-4423-9d3d-4652da00a148",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "cddcfd04-d6cb-459a-bd4a-51e992782236",
              "typeOfStateId": "state",
              "$connId": "con_38",
              "$id": "88711e42-e912-4e5b-8643-f52ffa79dc74",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*sim.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "c076d138-55ff-40f0-b069-c620a81b114d",
              "typeOfStateId": "state",
              "$connId": "con_43",
              "$id": "610edc88-1312-4852-8ed6-eab2d572971a",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*n[aAãÃ]o.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "0839b549-cbef-45f1-9f78-65e88eefdbc4",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "REQUISIÇÃO HTTP - GET ALERT MESSAGE",
              "$invalid": false,
              "settings": {
                "headers": {
                  "Authorization": "{{config.botKey}}",
                  "Content-Type": "application/json"
                },
                "method": "POST",
                "body": "{  \n  \"id\": \"{{random.guid}}\",\n  \"method\": \"get\",\n  \"uri\": \"/resources/mensagemAlertaGeral\"\n}",
                "uri": "https://camicado.http.msging.net/commands",
                "responseStatusVariable": "generalAlertMessageStatus",
                "responseBodyVariable": "generalAlertMessageResponse"
              },
              "conditions": []
            },
            {
              "$id": "96728f74-75ee-459d-a088-1548c414eff6",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "EXECUTAR SCRIPT - GET ALERT MSG",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "function run(mensagemAlertaResponse) {\n\n                let mensagemAlerta = \"\";\n\n                try {\n\n                    let response = JSON.parse(mensagemAlertaResponse);\n                    mensagemAlerta = response.resource;\n\n                } catch(e) {\n                    mensagemAlerta = \"\";\n                }\n\n                return mensagemAlerta;\n            }",
                "inputVariables": [
                  "generalAlertMessageResponse"
                ],
                "outputVariable": "generalAlertMessage",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "834c1056-dd9b-494c-8558-38e71068ea07",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "action": "Exibicao",
                "category": "Alerta geral mensagem"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "d35b3df4-eec4-48e9-8b9b-e2a2e58d3ede",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Alerta geral mensagem conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            },
            {
              "$id": "931babfd-9808-d0c4-88a9-e896b727499f",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - set entrypoint",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(input) {\n\tif(input == 'Olá! Eu vim no site Camicado e quero falar com vocês.') {\n\t\treturn \"Site\";\n\t}\n\n\tif(input == 'Olá! Eu vim no site Camicado e gostaria de ser atendido por vocês.') {\n\t\treturn \"Site - Atendimento\";\n\t}\n\n\tif(input == 'Olá! Estava no perfil do Instagram da Camicado e gostaria de conversar com vocês.') {\n\t\treturn \"Instagram\";\n\t}\n\n\tif(input == 'Ola! Eu vim do Instagram Camicado e gostaria de conversar com vocês. Bora?') {\n\t\treturn \"Linktree\";\n\t}\n\n\tif(input == 'Oi, gostaria de falar sobre uma venda para empresa') {\n\t\treturn \"Empresa\";\n\t}\n\treturn \"N/A\";\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "entrypoint",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "58e3fb05-26fa-a0d3-5f4e-c738f94c3736",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "EntryPoint",
                "action": "{{entrypoint}}"
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "exists",
                  "values": [],
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            },
            {
              "$id": "74a13d27-6793-d036-6b0f-bb278ecfa5c7",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - set entrypoint",
              "$invalid": false,
              "settings": {
                "extras": {
                  "entrypoint": "{{entrypoint}}"
                }
              },
              "conditions": [
                {
                  "values": [],
                  "source": "context",
                  "comparison": "exists",
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Sim",
            "Não"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "aa8a8dd1-2d06-4c18-8b39-40cf3f760da5",
          "root": false,
          "$title": "Alerta geral mensagem",
          "$position": {
            "top": "3998.67px",
            "left": "647.333px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "57553b74-43b2-4057-b713-ea7cf096d008",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "aa8a8dd1-2d06-4c18-8b39-40cf3f760da5",
              "typeOfStateId": "state",
              "$connId": "con_48",
              "$id": "f25d45e8-79a4-4522-bc84-e210201faea3",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "Sim"
                  ],
                  "variable": "isGeneralAlertEnabled"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "fdfe2d56-3328-4916-ab9f-05aa9d9897ed",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "REQUISIÇÃO HTTP - GET ALERTA GERAL TOGGLE",
              "$invalid": false,
              "settings": {
                "headers": {
                  "Authorization": "{{config.botKey}}"
                },
                "method": "POST",
                "body": "{  \n  \"id\": \"{{$guid}}\",\n  \"method\": \"get\",\n  \"uri\": \"/resources/habilitaAlertaGeral\"\n}",
                "uri": "https://camicado.http.msging.net/commands",
                "responseStatusVariable": "habilitaAlertaGeralStatus",
                "responseBodyVariable": "habilitaAlertaGeralResponse"
              },
              "conditions": []
            },
            {
              "$id": "6961dd13-4462-48cd-a736-a36e1e7700b0",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "EXECUTAR SCRIPT - IS GENERAL ALERT ENABLED",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n            function run(habilitaAlertaResponse) {\n\n                try {\n                    let habilitaAlerta = \"Não\";\n\n                    let response = JSON.parse(habilitaAlertaResponse);\n\n                    if(response && response.resource) {\n                        return response.resource;\n                    }\n\n                    return habilitaAlerta;\n                } catch(e) {\n                    return 'Não';\n                }\n            }",
                "inputVariables": [
                  "habilitaAlertaGeralResponse"
                ],
                "outputVariable": "isGeneralAlertEnabled",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "cddcfd04-d6cb-459a-bd4a-51e992782236",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1",
          "root": false,
          "$title": "Verifica alerta geral",
          "$position": {
            "top": "3888.25px",
            "left": "645px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "3de0bdfc-9d1c-4a21-b1fc-be18a9a3faa1": {
          "$contentActions": [
            {
              "action": {
                "$id": "8d52b702-4378-418b-ac25-b37b16763d25",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "8266705c-7a8a-4abf-a68d-723ecb96659b",
                  "type": "text/plain",
                  "content": "{{mensagemFeriado}}",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "8266705c-7a8a-4abf-a68d-723ecb96659b",
                    "type": "text/plain",
                    "content": "{{mensagemFeriado}}"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "c22e326a-04a0-4181-a500-8538d54c415b",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "6d64e139-f227-43aa-bb27-542738a66664",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "6d64e139-f227-43aa-bb27-542738a66664",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "eb21efb7-ce53-434d-bc55-07ea306cae3d",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "180d6a17-d508-4ac4-adaa-d4be98a6d754",
                  "type": "text/plain",
                  "content": "Hoje nosso time de especialistas não está disponível. 😕\n\nMas entraremos em contato com você assim que possível. \n\nHorário de atendimento:\n\n⏰ *Segunda a Sexta: 8h30 às 20h30.*\n⏰ *Sábado: 8h45 às 15h.*",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "180d6a17-d508-4ac4-adaa-d4be98a6d754",
                    "type": "text/plain",
                    "content": "Hoje nosso time de especialistas não está disponível. 😕\n\nMas entraremos em contato com você assim que possível. \n\nHorário de atendimento:\n\n⏰ *Segunda a Sexta: 8h30 às 20h30.*\n⏰ *Sábado: 8h45 às 15h.*"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "ecb02ccd-e4f0-4096-bafd-91b44694db10",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "588f13fb-5706-4c0b-aa2e-d47901104f80",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "action": "Exibicao",
                "category": "Mensagem alerta feriado"
              },
              "conditions": []
            },
            {
              "$id": "6f2e117e-4f04-4e38-bd73-347835d32347",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "Requisição HTTP",
              "$invalid": false,
              "settings": {
                "headers": {
                  "Authorization": "{{config.botKey}}"
                },
                "method": "POST",
                "body": "{  \n  \"id\": \"{{random.guid}}\",\n  \"method\": \"get\",\n  \"uri\": \"/resources/mensagemAlertaTransbordo\"\n}",
                "uri": "https://camicado.http.msging.net/commands",
                "responseStatusVariable": "mensagemAlertaTransbordoStatus",
                "responseBodyVariable": "mensagemAlertaTransbordoResponse"
              },
              "conditions": []
            },
            {
              "$id": "42b34102-2029-4056-af86-35c8dc55de42",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n            function run(mensagemAlerta) {\n\n                try {\n                    let msg = \"\";\n\n                    let response = JSON.parse(mensagemAlerta);\n\n                    if(response && response.resource) {\n                        return response.resource;\n                    }\n\n                    return msg;\n                } catch(e) {\n                    return '';\n                }\n            }",
                "inputVariables": [
                  "mensagemAlertaTransbordoResponse"
                ],
                "outputVariable": "mensagemFeriado",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "61eb500a-2a28-4abb-b13d-590b9f0a6e89",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Casos",
                "action": "Transbordou no feriado"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "c823e1ae-7e04-4f87-bb97-59f5a294ca28",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Mensagem alerta feriado conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            },
            {
              "$id": "1f3c6462-2be1-e93e-2088-f3d26285992f",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - set entrypoint",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(input) {\n\tif(input == 'Olá! Eu vim no site Camicado e quero falar com vocês.') {\n\t\treturn \"Site\";\n\t}\n\n\tif(input == 'Olá! Eu vim no site Camicado e gostaria de ser atendido por vocês.') {\n\t\treturn \"Site - Atendimento\";\n\t}\n\n\tif(input == 'Olá! Estava no perfil do Instagram da Camicado e gostaria de conversar com vocês.') {\n\t\treturn \"Instagram\";\n\t}\n\n\tif(input == 'Ola! Eu vim do Instagram Camicado e gostaria de conversar com vocês. Bora?') {\n\t\treturn \"Linktree\";\n\t}\n\n\tif(input == 'Oi, gostaria de falar sobre uma venda para empresa') {\n\t\treturn \"Empresa\";\n\t}\n\treturn \"N/A\";\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "entrypoint",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "b75d75be-25f5-2274-a790-d8fce1e05212",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "EntryPoint",
                "action": "{{entrypoint}}"
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "exists",
                  "values": [],
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            },
            {
              "$id": "08a7224b-d103-209c-4967-2f5a480771a7",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - set entrypoint",
              "$invalid": false,
              "settings": {
                "extras": {
                  "entrypoint": "{{entrypoint}}"
                }
              },
              "conditions": [
                {
                  "values": [],
                  "source": "context",
                  "comparison": "exists",
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "c076d138-55ff-40f0-b069-c620a81b114d",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "3de0bdfc-9d1c-4a21-b1fc-be18a9a3faa1",
          "root": false,
          "$title": "Mensagem alerta feriado",
          "$position": {
            "top": "4012px",
            "left": "856px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "cddcfd04-d6cb-459a-bd4a-51e992782236": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "5c6d1e36-130a-4a96-9169-641358abd815",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "3de0bdfc-9d1c-4a21-b1fc-be18a9a3faa1",
              "typeOfStateId": "state",
              "$connId": "con_53",
              "$id": "d92fc91d-7dc6-4ab0-be78-094a162dcb31",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "Sim"
                  ],
                  "variable": "isHollidayAlertEnabled"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "ecd40b19-712b-4b28-bd04-4a64c57c8d2a",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "REQUISIÇÃO HTTP - GET TRANSBORD TOGGLE",
              "$invalid": false,
              "settings": {
                "headers": {
                  "Authorization": "{{config.botKey}}",
                  "Content-Type": "application/json"
                },
                "method": "POST",
                "body": "{  \n  \"id\": \"{{$guid}}\",\n  \"method\": \"get\",\n  \"uri\": \"/resources/habilitaAlertaTransbordo\"\n}",
                "uri": "https://camicado.http.msging.net/commands",
                "responseStatusVariable": "mensagemAlertaTransbordoStatus",
                "responseBodyVariable": "habilitaAlertaResponse"
              },
              "conditions": []
            },
            {
              "$id": "705bc208-05c2-4a84-bc8a-9292193eed27",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "EXECUTAR SCRIPT - IS ALERT ENABLED",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n            function run(habilitaAlertaResponse) {\n\n                try {\n                    let habilitaAlerta = \"Não\";\n\n                    let response = JSON.parse(habilitaAlertaResponse);\n\n                    if(response && response.resource) {\n                        return response.resource;\n                    }\n\n                    return habilitaAlerta;\n                } catch(e) {\n                    return 'Não';\n                }\n            }",
                "inputVariables": [
                  "habilitaAlertaResponse"
                ],
                "outputVariable": "isHollidayAlertEnabled",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "02848004-4b89-494c-b667-03d53fac84ea",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "cddcfd04-d6cb-459a-bd4a-51e992782236",
          "root": false,
          "$title": "verifica alerta feriado",
          "$position": {
            "top": "3888px",
            "left": "862.429px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "6d590358-ad80-45b7-b6c3-235e3ef4ac93": {
          "$contentActions": [
            {
              "action": {
                "$id": "a3231dbe-30c6-49fa-b158-ee0d9161cdb6",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "b0624e5a-e3cd-46dc-8967-53218eabe2d3",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "b0624e5a-e3cd-46dc-8967-53218eabe2d3",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "e92a3047-9a3b-4258-ab1f-2c07699de359",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "54db06fb-84e8-46c3-9678-6fc63e6164cf",
                  "type": "text/plain",
                  "content": "O horário de atendimento do nosso time de especialistas já foi encerrado. 😕\n\nMas entraremos em contato com você dentro do nosso horário de atendimento:\n\n\n⏰ *Segunda a Sexta: 8h30 às 20h30.*\n⏰ *Sábado: 8h45 às 15h.*",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "54db06fb-84e8-46c3-9678-6fc63e6164cf",
                    "type": "text/plain",
                    "content": "O horário de atendimento do nosso time de especialistas já foi encerrado. 😕\n\nMas entraremos em contato com você dentro do nosso horário de atendimento:\n\n\n⏰ *Segunda a Sexta: 8h30 às 20h30.*\n⏰ *Sábado: 8h45 às 15h.*"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "77aefdf7-0b61-421d-8222-278f8e615ba9",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "efc7e5d6-38ed-42cc-952c-12b281342b29",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Fora do horario de atendimento",
                "action": "Exibicao"
              },
              "conditions": []
            },
            {
              "$id": "40ddfd8b-1363-43c3-bab3-a55bce5d9c10",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Casos",
                "action": "Transbordou fora horário"
              },
              "conditions": []
            },
            {
              "$id": "3d97cd5f-2c31-4bc5-be0b-22f0eabc77de",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "businessHour",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "function run() {\n    try {\n        var work = JSON.parse('{{workSchedule}}');\n        var sunday = work[0].workTime;\n        var monday = work[1].workTime;\n        var tuesday = work[2].workTime;\n        var wednesday = work[3].workTime;\n        var thursday = work[4].workTime;\n        var friday = work[5].workTime;\n        var saturday = work[6].workTime;\n\n\n        return {\n            \"mondayOpen\": monday.open, \"mondayClose\": monday.close,\n            \"tuesdayOpen\": tuesday.open, \"tuesdayClose\": tuesday.close,\n            \"wednesdayOpen\": wednesday.open, \"wednesdayClose\": wednesday.close,\n            \"thursdayOpen\": thursday.open, \"thursdayClose\": thursday.close,\n            \"fridayOpen\": friday.open, \"fridayClose\": friday.close,\n            \"saturdayOpen\": saturday.open, \"saturdayClose\": saturday.close,\n            \"sundayOpen\": sunday.open, \"sundayClose\": sunday.close\n        };\n    }\n    catch (ex) {\n        return \"\";\n    }\n}",
                "inputVariables": [],
                "outputVariable": "businessHour",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "686a0f31-d09e-43aa-a673-83a23a55c849",
              "type": "ExecuteScript",
              "$title": "Set horarioFuncionamento",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "\nfunction run() {\n    var work = JSON.parse('{{workSchedule}}');\n    var sunday = work[0].workTime;\n    var monday = work[1].workTime;\n    var tuesday = work[2].workTime;\n    var wednesday = work[3].workTime;\n    var thursday = work[4].workTime;\n    var friday = work[5].workTime;\n    var saturday = work[6].workTime;\n\n    if (sunday.open || sunday.close) {\n        sunday = '*Domingo* {{businessHour@sundayOpen}} às {{businessHour@sundayClose}}';\n    }\n    else {\n        sunday = '*Domingo* Fechado';\n    }\n\n    if (monday.open || monday.close) {\n        monday = '*Segunda:* {{businessHour@mondayOpen}} às {{businessHour@mondayClose}}';\n    }\n    else {\n        monday = '*Segunda* Fechado';\n    }\n\n    if (tuesday.open || tuesday.close) {\n        tuesday = '*Terça:* {{businessHour@tuesdayOpen}} às {{businessHour@tuesdayClose}}';\n    }\n    else {\n        tuesday = '*Terça* Fechado';\n    }\n\n    if (wednesday.open || wednesday.close) {\n        wednesday = '*Quarta:* {{businessHour@wednesdayOpen}} às {{businessHour@wednesdayClose}}';\n    }\n    else {\n        wednesday = '*Quarta* Fechado';\n    }\n\n    if (thursday.open || thursday.close) {\n        thursday = '*Quinta:* {{businessHour@thursdayOpen}} às {{businessHour@thursdayClose}}';\n    }\n    else {\n        thursday = '*Quinta* Fechado';\n    }\n\n    if (friday.open || friday.close) {\n        friday = '*Sexta:* {{businessHour@fridayOpen}} às {{businessHour@fridayClose}}';\n    }\n    else {\n        friday = '*Sexta* Fechado';\n    }\n\n    if (saturday.open || saturday.close) {\n        saturday = '*Sábado:* {{businessHour@saturdayOpen}} às {{businessHour@saturdayClose}}';\n    }\n    else {\n        saturday = '*Sábado* Fechado';\n    }\n    return \"Horário de atendimento:\" +\n        \"\\n\" +\n        \"\\n\" +\n        monday +\n        \"\\n\" +\n        tuesday +\n        \"\\n\" +\n        wednesday +\n        \"\\n\" +\n        thursday +\n        \"\\n\" +\n        friday +\n        \"\\n\" +\n        \"\\n\" +\n        saturday +\n        \"\\n\" +\n        sunday;\n}",
                "inputVariables": [],
                "outputVariable": "horarioFuncionamento",
                "LocalTimeZoneEnabled": false
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "exists",
                  "values": [],
                  "variable": "placeSelected"
                }
              ]
            },
            {
              "$id": "ba71dd0d-ea06-41e0-a9c4-53accd60823b",
              "type": "ExecuteScript",
              "$title": "Set horarioFuncionamento",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "\nfunction run() {\n    try{\n        return \"Horário de atendimento:\\n\\nDe segunda a sábado das 8h às 22h\\nDomingos e feriados das 12h às 21h \"\n    }catch(e){}\n    }",
                "inputVariables": [],
                "outputVariable": "horarioFuncionamento",
                "LocalTimeZoneEnabled": false
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "notExists",
                  "values": [],
                  "variable": "placeSelected"
                }
              ]
            },
            {
              "$id": "28607a8e-6954-4ded-9a66-8ae8a48c00f3",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script- set phone",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(identity) {\n\treturn identity.split('@')[0];\n}",
                "inputVariables": [
                  "contact.identity"
                ],
                "outputVariable": "phone",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "d373f67c-678b-415f-a210-f8226e246561",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "Requisição HTTP - send tomorrow notification",
              "$invalid": false,
              "settings": {
                "headers": {
                  "Authorization": "{{config.flowChatAuth}}"
                },
                "method": "POST",
                "body": "{\n    \"userIdentifier\": \"{{contact.identity}}\",\n    \"botId\": \"{{config.flowChatBotId}}\",\n    \"date\": \"{{calendar.datetime}}\",\n    \"cameBack\": \"false\",\n    \"cellPhone\": \"{{phone}}\"\n}",
                "uri": "{{config.flowChatApi}}attendance/lostAttendance/{{config.flowChatBotId}}",
                "responseStatusVariable": "notificationSentStatus",
                "responseBodyVariable": "notificationSentResponse"
              },
              "conditions": []
            },
            {
              "$id": "c68413b3-a383-4318-80f1-e9c88fc684a9",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Fora do horario Novos Canais v2",
                "action": "{{contact.name}} | {{contact.identity}} | Novos Canais"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "14c3e3c1-0709-4133-9a22-5e6b1db80a03",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Fora do horario de atendimento conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            },
            {
              "$id": "6ee84881-af13-17f6-693b-c16107ddce73",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - set entrypoint",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(input) {\n\tif(input == 'Olá! Eu vim no site Camicado e quero falar com vocês.') {\n\t\treturn \"Site\";\n\t}\n\n\tif(input == 'Olá! Eu vim no site Camicado e gostaria de ser atendido por vocês.') {\n\t\treturn \"Site - Atendimento\";\n\t}\n\n\tif(input == 'Olá! Estava no perfil do Instagram da Camicado e gostaria de conversar com vocês.') {\n\t\treturn \"Instagram\";\n\t}\n\n\tif(input == 'Ola! Eu vim do Instagram Camicado e gostaria de conversar com vocês. Bora?') {\n\t\treturn \"Linktree\";\n\t}\n\n\tif(input == 'Oi, gostaria de falar sobre uma venda para empresa') {\n\t\treturn \"Empresa\";\n\t}\n\treturn \"N/A\";\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "entrypoint",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "4b394515-6fd4-346c-6f10-440dec554854",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "EntryPoint",
                "action": "{{entrypoint}}"
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "exists",
                  "values": [],
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            },
            {
              "$id": "f7b89f28-62f0-dff1-1e85-ad7e309874ff",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - set entrypoint",
              "$invalid": false,
              "settings": {
                "extras": {
                  "entrypoint": "{{entrypoint}}"
                }
              },
              "conditions": [
                {
                  "values": [],
                  "source": "context",
                  "comparison": "exists",
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "c076d138-55ff-40f0-b069-c620a81b114d",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "6d590358-ad80-45b7-b6c3-235e3ef4ac93",
          "root": false,
          "$title": "Fora do horario de atendimento",
          "$position": {
            "top": "4010px",
            "left": "1068.43px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "02848004-4b89-494c-b667-03d53fac84ea": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "92adbc41-3bdc-4e6a-845b-d0c46a881a75",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "2ebd962b-25a3-456f-a831-8738db8b6b34",
              "typeOfStateId": "state",
              "$connId": "con_58",
              "$id": "3bbc5de7-a809-421c-bf02-f1d992b16f40",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "true"
                  ],
                  "variable": "isWorkTime"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "99e7471e-64f0-4fc3-9604-93b309f09d20",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - is work time",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "// Receive the variables as parameters\nfunction run(offset,workDays, startMonday, endMonday, startTuesday, endTuesday, startWednesday, endWednesday, startThursday, endThursday, startFriday, endFriday, startSaturday, endSaturday, startSunday, endSunday) {\n\n    offset = parseInt(offset);\n    let today = nowUTC(offset);\n    let week = today.getDay()\n\n    let startDate = null;\n    let endDate = null;\n\n    switch(week){\n        case 1:\n            startDate = utcDate(startMonday, today);\n            endDate = utcDate(endMonday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n            \n        case 2 :\n            startDate = utcDate(startTuesday, today);\n            endDate = utcDate(endTuesday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n\n        case 3:\n            startDate = utcDate(startWednesday, today);\n            endDate = utcDate(endWednesday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 4:\n            startDate = utcDate(startThursday, today);\n            endDate = utcDate(endThursday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 5:\n            startDate = utcDate(startFriday, today);\n            endDate = utcDate(endFriday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 6:\n            startDate = utcDate(startSaturday, today);\n            endDate = utcDate(endSaturday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 0:\n            startDate = utcDate(startSunday, today);\n            endDate = utcDate(endSunday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays); \n    }\n\n    return false;\n   /*  let startDate = utcDate(start, today);\n    let endDate = utcDate(end, today);\n\n    \n    return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays); */\n}\n\n//Get now UTC Date\nfunction nowUTC(offset) {\n    let now = new Date;\n    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),\n        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());\n\n    return new Date(utc_timestamp + offset * 3600 * 1000);\n}\n\n//Get UTC Date\nfunction utcDate(timeString, today) {\n    let now = new Date;\n\n    let hour = getValueByString('hour', timeString);\n    let minutes = getValueByString('minutes', timeString);\n    let utc_timestamp = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(),\n        hour, minutes, 0, 0);\n    return new Date(utc_timestamp);\n}\n\n//Get hour/minute by string with pattern HH:mm\nfunction getValueByString(type, timeString) {\n\n    if (type === 'hour') {\n        return parseInt(timeString.substring(0, timeString.indexOf(':')));\n    }\n\n    else if (type === 'minutes') {\n        return parseInt(timeString.substring(timeString.indexOf(':') + 1, timeString.length));\n    }\n\n    return 0;\n}\n\n//Get if today is a work day\nfunction isWorkDay(today, workDays) {\n    workDays = workDays.split(',');\n\n    return workDays.indexOf(today.getDay().toString()) >= 0;\n}\n",
                "inputVariables": [
                  "config.dateTimeOffset",
                  "config.workDays",
                  "config.startDateMonday",
                  "config.endDateMonday",
                  "config.startDateTuesday",
                  "config.endDateTuesday",
                  "config.startDateWednesday",
                  "config.endDateWednesday",
                  "config.startDateThursday",
                  "config.endDateThursday",
                  "config.startDateFriday",
                  "config.endDateFriday",
                  "config.startDateSaturday",
                  "config.endDateSaturday",
                  "config.startDateSunday",
                  "config.endDateSunday"
                ],
                "outputVariable": "isWorkTime",
                "LocalTimeZoneEnabled": false
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "notExists",
                  "values": [],
                  "variable": "placeSelected"
                },
                {
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "contact.extras.queue",
                  "values": [
                    "Lista de Presentes"
                  ]
                }
              ]
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "6d590358-ad80-45b7-b6c3-235e3ef4ac93",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "02848004-4b89-494c-b667-03d53fac84ea",
          "root": false,
          "$title": "Verifica horario atendimento",
          "$position": {
            "top": "3890.43px",
            "left": "1070px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "4e7a498c-7bad-4ecc-a194-9a4f0d6319b8": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "b827b191-d5c4-4faf-81d6-1ae49c5ba534",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "3298c44e-029b-4110-a6c8-8c5babb7b9c8",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Casos",
                "action": "Transbordou"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "desk:4563de03-2144-4ef9-8806-07a618a6fefe",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "4e7a498c-7bad-4ecc-a194-9a4f0d6319b8",
          "root": false,
          "$title": "Pre transbordo instrucao",
          "$position": {
            "top": "3986px",
            "left": "1279px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "desk:4563de03-2144-4ef9-8806-07a618a6fefe": {
          "$contentActions": [
            {
              "input": {
                "bypass": false,
                "conditions": [
                  {
                    "source": "context",
                    "variable": "desk_forwardToDeskState_status",
                    "comparison": "equals",
                    "values": [
                      "Success"
                    ]
                  }
                ],
                "$cardContent": {
                  "document": {
                    "id": "637ab772-32a3-40fd-9614-e5af2e527e58",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": false,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "$isDeskOutput": true,
              "conditions": [
                {
                  "source": "context",
                  "variable": "input.type",
                  "comparison": "equals",
                  "values": [
                    "application/vnd.iris.ticket+json"
                  ]
                },
                {
                  "source": "context",
                  "variable": "input.content@status",
                  "comparison": "equals",
                  "values": [
                    "ClosedAttendant"
                  ]
                }
              ],
              "$invalid": false,
              "stateId": "24100c61-9582-4060-964a-e1008e3b4e04",
              "$connId": "con_63",
              "$id": "dfb5e8a4-bf4c-40af-b988-c0080a81909e"
            },
            {
              "$isDeskOutput": true,
              "conditions": [
                {
                  "source": "context",
                  "variable": "input.type",
                  "comparison": "equals",
                  "values": [
                    "application/vnd.iris.ticket+json"
                  ]
                },
                {
                  "source": "context",
                  "variable": "input.content@status",
                  "comparison": "equals",
                  "values": [
                    "ClosedClient"
                  ]
                }
              ],
              "$invalid": false,
              "stateId": "24100c61-9582-4060-964a-e1008e3b4e04",
              "$connId": "con_68",
              "$id": "59ef3b97-084f-4cbf-9edf-60de13b862fe"
            },
            {
              "$isDeskOutput": true,
              "conditions": [
                {
                  "source": "context",
                  "variable": "input.type",
                  "comparison": "equals",
                  "values": [
                    "application/vnd.iris.ticket+json"
                  ]
                },
                {
                  "source": "context",
                  "variable": "input.content@status",
                  "comparison": "equals",
                  "values": [
                    "ClosedClientInactivity"
                  ]
                }
              ],
              "$invalid": false,
              "stateId": "ce0a1a66-1c73-4071-8029-df83004c6759",
              "$connId": "con_73",
              "$id": "136a289c-2742-4d0c-a30f-0d49e0fb1fd6"
            },
            {
              "$isDeskOutput": true,
              "$isDeskDefaultOutput": true,
              "conditions": [
                {
                  "source": "context",
                  "variable": "desk_forwardToDeskState_status",
                  "comparison": "equals",
                  "values": [
                    "Error"
                  ]
                }
              ],
              "stateId": "fallback",
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "37f03691-4a06-47e1-8298-7f51d90d29bc",
              "$typeOfContent": "",
              "type": "ForwardToDesk",
              "conditions": [],
              "settings": {},
              "$invalid": false
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "desk:4563de03-2144-4ef9-8806-07a618a6fefe",
            "$invalid": false
          },
          "$tags": [],
          "id": "desk:4563de03-2144-4ef9-8806-07a618a6fefe",
          "deskStateVersion": "3.0.0",
          "root": false,
          "$title": "Atendimento humano",
          "$afterStateChangedActions": [
            {
              "$id": "2c8dadce-2fdc-4de7-b9b1-190dc34e8d6b",
              "$typeOfContent": "",
              "type": "LeavingFromDesk",
              "conditions": [],
              "settings": {}
            }
          ],
          "$position": {
            "top": "4106px",
            "left": "1281px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "2ebd962b-25a3-456f-a831-8738db8b6b34": {
          "$contentActions": [
            {
              "action": {
                "$id": "3c021abd-7d2c-4b53-a51f-396439a8d99f",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "d6a45dcc-6bb6-4964-8ef4-b4b5d6b7c8f0",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "d6a45dcc-6bb6-4964-8ef4-b4b5d6b7c8f0",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "03fd7fb2-ca2c-4f53-ab37-0388295f3c9e",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "ee679a73-9523-4c42-8acc-864cb37015aa",
                  "type": "text/plain",
                  "content": "Por favor, aguarde um momento enquanto direciono o seu atendimento. ⏳",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "ee679a73-9523-4c42-8acc-864cb37015aa",
                    "type": "text/plain",
                    "content": "Por favor, aguarde um momento enquanto direciono o seu atendimento. ⏳"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "2e2a14fa-9627-4148-b4fd-b34626bae5f1",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "49ef0383-1963-44d9-a4a6-d5d81591d758",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Pre transbordo",
                "action": "Exibição"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "4e7a498c-7bad-4ecc-a194-9a4f0d6319b8",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "2ebd962b-25a3-456f-a831-8738db8b6b34",
          "root": false,
          "$title": "Pre transbordo",
          "$position": {
            "top": "3889px",
            "left": "1280.57px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "24100c61-9582-4060-964a-e1008e3b4e04": {
          "$contentActions": [
            {
              "action": {
                "$id": "b618cbc6-e8d5-4645-a929-94187c84786d",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "636969de-045b-44e7-bf2a-fa31153a1f90",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "636969de-045b-44e7-bf2a-fa31153a1f90",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "c025e9c3-d30b-4ad0-aca4-3e91963ac0e7",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "3f3fd17c-2671-4419-a81e-645424bc7769",
                  "type": "text/plain",
                  "content": "Sua conversa com nossa equipe de atendimento foi encerrada. 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "3f3fd17c-2671-4419-a81e-645424bc7769",
                    "type": "text/plain",
                    "content": "Sua conversa com nossa equipe de atendimento foi encerrada. 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "d7939def-e784-4a56-aed5-fe46ed13ccfb",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "8c6badf5-d94a-4338-862e-7bff9f42b72a",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Finaliza atendimento",
                "action": "{{contact.identity}}"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "6e6a72f3-893c-4b04-88af-b4ace0033bfd",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "24100c61-9582-4060-964a-e1008e3b4e04",
          "root": false,
          "$title": "Finaliza atendimento",
          "$position": {
            "top": "4231.25px",
            "left": "1283px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "f60d0e2d-28a6-4cf2-89a3-24e4bb583663": {
          "$contentActions": [
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "ad9024a8-7754-4e42-a5ba-422b1971c45e",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "68f20987-02c9-41d9-99c1-32c48b5977e7",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback ignora msg",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "940c093f-e063-40b3-bfd3-a8b5c8a9b1c7",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback ignora msg conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            },
            {
              "$id": "d9aa2d34-d1d4-020b-68e3-143974e3a577",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - set entrypoint",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(input) {\n\tif(input == 'Olá! Eu vim no site Camicado e quero falar com vocês.') {\n\t\treturn \"Site\";\n\t}\n\n\tif(input == 'Olá! Eu vim no site Camicado e gostaria de ser atendido por vocês.') {\n\t\treturn \"Site - Atendimento\";\n\t}\n\n\tif(input == 'Olá! Estava no perfil do Instagram da Camicado e gostaria de conversar com vocês.') {\n\t\treturn \"Instagram\";\n\t}\n\n\tif(input == 'Ola! Eu vim do Instagram Camicado e gostaria de conversar com vocês. Bora?') {\n\t\treturn \"Linktree\";\n\t}\n\n\tif(input == 'Oi, gostaria de falar sobre uma venda para empresa') {\n\t\treturn \"Empresa\";\n\t}\n\treturn \"N/A\";\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "entrypoint",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "c27681cb-4786-5c17-f3cc-72d7b0b40694",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "EntryPoint",
                "action": "{{entrypoint}}"
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "exists",
                  "values": [],
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            },
            {
              "$id": "049580a9-f77d-f3ac-3047-09b0d03b6ead",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - set entrypoint",
              "$invalid": false,
              "settings": {
                "extras": {
                  "entrypoint": "{{entrypoint}}"
                }
              },
              "conditions": [
                {
                  "values": [],
                  "source": "context",
                  "comparison": "exists",
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "f60d0e2d-28a6-4cf2-89a3-24e4bb583663",
          "root": false,
          "$title": "Feedback ignora msg",
          "$position": {
            "top": "4303px",
            "left": "1820px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "e8440682-bd21-402f-b20a-b0eb5506fa40": {
          "$contentActions": [
            {
              "action": {
                "$id": "f27111be-f0ee-49f4-a17b-96aac4fcf317",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "18bf6385-28dc-48a1-a741-bc1ed7afc013",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "18bf6385-28dc-48a1-a741-bc1ed7afc013",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "da36f937-cebe-4c46-b9ce-69ce5c4d5b91",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "e3292b40-7c36-4af8-96c8-e20735903fa8",
                  "type": "text/plain",
                  "content": "Fico muito feliz em saber! 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "e3292b40-7c36-4af8-96c8-e20735903fa8",
                    "type": "text/plain",
                    "content": "Fico muito feliz em saber! 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "7c1b456f-e985-47a8-b6b0-3da48d0ebd68",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "00893a21-39db-4a96-a1de-c877d228e444",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback bom",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "e8702a6c-ec6e-436a-9196-7f0e7c5d1f32",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos -  conteudo",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback bom conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "f60d0e2d-28a6-4cf2-89a3-24e4bb583663",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "e8440682-bd21-402f-b20a-b0eb5506fa40",
          "root": false,
          "$title": "Feedback bom",
          "$position": {
            "top": "4015.29px",
            "left": "1669.57px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "111b8065-794c-43ce-8b89-316385f729d5": {
          "$contentActions": [
            {
              "action": {
                "$id": "6d5cce9a-9db1-4e17-adc9-028402bff17f",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "1ed33e32-969b-449b-b6de-d552d2dc5e72",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "1ed33e32-969b-449b-b6de-d552d2dc5e72",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "2963fdfe-00c8-4a0e-a262-0f454b82fa4c",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "9e151b93-f1f9-4c7e-8df9-03828ae98476",
                  "type": "text/plain",
                  "content": "Poxa... sinto muito. 🙁",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "9e151b93-f1f9-4c7e-8df9-03828ae98476",
                    "type": "text/plain",
                    "content": "Poxa... sinto muito. 🙁"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "2747ae05-4db8-40e7-addb-68394281adff",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "35dc48c0-272b-4fa6-af30-e31851e27312",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "35dc48c0-272b-4fa6-af30-e31851e27312",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "04e97cd4-46c2-4e0b-a349-1f00092a5fe5",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "b1cb5fc0-475f-4e56-8207-22fe194705be",
                  "type": "text/plain",
                  "content": "Me conta o que aconteceu de errado?",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "b1cb5fc0-475f-4e56-8207-22fe194705be",
                    "type": "text/plain",
                    "content": "Me conta o que aconteceu de errado?"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "b427ff5f-df87-4a7f-a57a-1f2578d42973",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "dd4d403b-40a6-4328-ba1c-b10c71ae6a41",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback ruim",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "60e262fd-6449-44a8-92f2-9f8f93822f0d",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos -  conteudo",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback ruim conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "86a601d8-0a46-4a99-b4c5-f168b4902069",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "111b8065-794c-43ce-8b89-316385f729d5",
          "root": false,
          "$title": "Feedback ruim",
          "$position": {
            "top": "4023.43px",
            "left": "1939px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "6e6a72f3-893c-4b04-88af-b4ace0033bfd": {
          "$contentActions": [
            {
              "action": {
                "$id": "9fa390c6-2924-4d21-8f96-a5f1e80f69ac",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "c4570942-b551-4ddc-bfcb-3859ffdb6341",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "c4570942-b551-4ddc-bfcb-3859ffdb6341",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "f854764e-886b-4fbe-ac87-861500a77073",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "19bcd57f-ad62-4adb-9604-698d55df72dd",
                  "type": "text/plain",
                  "content": "Antes de me despedir, queria saber sua opinião sobre nosso time de atendimento! 😄",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "19bcd57f-ad62-4adb-9604-698d55df72dd",
                    "type": "text/plain",
                    "content": "Antes de me despedir, queria saber sua opinião sobre nosso time de atendimento! 😄"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "92122400-03d8-4ad0-b0e1-6b2f1adcdca2",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "64de4205-70e9-4a6f-bc71-ff8d0374a4e5",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "64de4205-70e9-4a6f-bc71-ff8d0374a4e5",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "4c403576-2be9-4292-856a-1678706c1bba",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "633c1cbd-11b5-4562-a502-2db334fd09b4",
                  "type": "text/plain",
                  "content": "Como você avalia o atendimento recebido?\n\n5 - Ótimo\n4 - Bom\n3 - Neutro \n2 - Ruim\n1 - Péssimo",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "633c1cbd-11b5-4562-a502-2db334fd09b4",
                    "type": "text/plain",
                    "content": "Como você avalia o atendimento recebido?\n\n5 - Ótimo\n4 - Bom\n3 - Neutro \n2 - Ruim\n1 - Péssimo"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "aa4063d3-17f6-4f74-aae1-c6279b8ce692",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "111b8065-794c-43ce-8b89-316385f729d5",
              "typeOfStateId": "state",
              "$connId": "con_78",
              "$id": "baedc2aa-2fe9-48e7-ba37-124722de0a9f",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "1",
                    "2",
                    "3"
                  ],
                  "variable": "npsScore"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "e8440682-bd21-402f-b20a-b0eb5506fa40",
              "typeOfStateId": "state",
              "$connId": "con_83",
              "$id": "a141bb7d-aa7a-4fa4-abae-4b9a059cd40a",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "4",
                    "5"
                  ],
                  "variable": "npsScore"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "60144a5b-18ed-45be-bb9a-ced69cad3d11",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback Transbordo",
                "action": "Exibicao"
              },
              "conditions": []
            },
            {
              "$id": "f3fd5c4f-ee06-4225-98ed-128990085dee",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "DEFINIR VARIÁVEL - SET QUEUE",
              "$invalid": false,
              "settings": {
                "variable": "team",
                "value": "{{contact.extras.queue}}"
              },
              "conditions": []
            },
            {
              "$id": "62b5702d-d534-4bc5-81a9-f5382d60b9fd",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável - set unit",
              "$invalid": false,
              "settings": {
                "variable": "unit",
                "value": "{{contact.extras.Loja}}"
              },
              "conditions": []
            },
            {
              "$id": "44dde806-3736-4106-a7e2-1a4959df8144",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "DEFINIR VARIÁVEL - SET TICKET ID",
              "$invalid": false,
              "settings": {
                "variable": "ticketId",
                "value": "{{input.content@sequentialId}}"
              },
              "conditions": []
            },
            {
              "$id": "7e55eca7-5698-402f-8520-d63605005a92",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável - get attendent",
              "$invalid": false,
              "settings": {
                "value": "{{input.content@agentIdentity}}",
                "variable": "attendantEmail"
              },
              "conditions": []
            },
            {
              "$id": "85d3e816-5e5a-48b4-92bc-9636ce98bda7",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - format attendent",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(attendantEmail) {\n\tattendantEmail = attendantEmail.split('@')[0];\n\tlet attendantEmailFirt = attendantEmail.split(\"%40\")[0]\n\tlet attendantEmailSecond = attendantEmail.split(\"%40\")[1]\n\n\treturn `${attendantEmailFirt}@${attendantEmailSecond}`\n}",
                "inputVariables": [
                  "attendantEmail"
                ],
                "outputVariable": "attendantEmail",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "4f9392e2-8b59-4660-9f01-31ba2cfa4599",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n            function run(identity) {\n                try {\n                    let phone = identity.split('@');\n\n                    return phone[0];\n                } catch(e) {\n                    return identity;\n                }\n            }",
                "inputVariables": [
                  "contact.identity"
                ],
                "outputVariable": "userPhone",
                "LocalTimeZoneEnabled": false
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "notExists",
                  "values": [],
                  "variable": "userPhone"
                }
              ]
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "91126c41-94ba-4968-b87c-1b1481ef9972",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get nps",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n            function run(inputPerfil) {\n                try {\n                    let firstNote = new RegExp('\\.*(1).*', 'i');\n                    let secondNote = new RegExp('\\.*(2).*', 'i');\n                    let thirdNote = new RegExp('\\.*(3).*', 'i');\n                    let fourthNote = new RegExp('\\.*(4).*', 'i');\n                    let fivethNote = new RegExp('\\.*(5).*', 'i');\n                    \n                   if(firstNote.test(inputPerfil)) {\n                        return \"1\";\n                    } else if(secondNote.test(inputPerfil)) {\n                        return \"2\";\n                    } else if(thirdNote.test(inputPerfil)) {\n                        return \"3\";\n                    } else if(fourthNote.test(inputPerfil)) {\n                        return \"4\";\n                    } else if(fivethNote.test(inputPerfil)) {\n                        return \"5\";\n                    }\n\n                } catch(e) {\n\n                }\n\n                return \"N/A\"; //Return value will be saved as \"Return value variable\" field name\n            }",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "npsScore",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "394cebf1-548f-4afb-8aff-a278737bd502",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - NPS",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "NPS",
                "action": "{{npsScore}}"
              },
              "conditions": []
            },
            {
              "$id": "44c707a0-d2af-46d2-8d61-f4ef7e987cff",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback transbordo conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            },
            {
              "$id": "79812d5e-c9e0-4b22-8191-a899e69d58c4",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - NPS POR Unidade",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "action": "{{npsScore}};{{ticketId}};{{unit}};{{userPhone}}",
                "category": "Nps por unidade new"
              },
              "conditions": []
            },
            {
              "$id": "72847050-3a6a-4087-ba7a-593d2dd6942d",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - NPS POR ATENDENTE",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "NPS por atendente new",
                "action": "{{npsScore}};{{ticketId}};{{attendantEmail}};{{userPhone}}"
              },
              "conditions": []
            },
            {
              "$id": "40b0522d-4560-4731-a5f9-46a98419b9c9",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - NPS POR FILA",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Nps por fila new",
                "action": "{{npsScore}};{{ticketId}};{{team}};{{userPhone}}"
              },
              "conditions": []
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "6e6a72f3-893c-4b04-88af-b4ace0033bfd",
          "root": false,
          "$title": "Feedback Transbordo",
          "$position": {
            "top": "3856.86px",
            "left": "1815.29px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "ce0a1a66-1c73-4071-8029-df83004c6759": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "b7031b2b-1ef1-470b-89fe-0314b14e9231",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "7ba44ed0-e92f-40c2-9bad-6156f082cca7",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Inatividade usuario",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "ad9860b2-db89-4479-b918-4baf3806d1a0",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Inatividade usuario conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "339dd05b-bab3-42e2-a587-bcd655b86ee6",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "ce0a1a66-1c73-4071-8029-df83004c6759",
          "root": false,
          "$title": "[I.0] Inatividade usuario",
          "$position": {
            "top": "3910.5px",
            "left": "2449.5px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "339dd05b-bab3-42e2-a587-bcd655b86ee6": {
          "$contentActions": [
            {
              "action": {
                "$id": "9f64bc6d-105d-4021-8d56-8e8a93428166",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "f45f71fd-217b-4b6d-a901-2ddfbf138c13",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "f45f71fd-217b-4b6d-a901-2ddfbf138c13",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "baaef615-9732-42eb-9386-30bded0302ca",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "7fbf8802-3f17-4ff0-bfd0-33dcd940a2c5",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "{{contact.name}}...? Você ainda está aí? 👀\n\n*Vamos continuar conversando?*",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Finalizar conversa",
                        "previewText": "Finalizar conversa",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Continuar conversa",
                        "previewText": "Continuar conversa",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "7fbf8802-3f17-4ff0-bfd0-33dcd940a2c5",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "{{contact.name}}...? Você ainda está aí? 👀\n\n*Vamos continuar conversando?*",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Finalizar conversa",
                          "previewText": "Finalizar conversa",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Continuar conversa",
                          "previewText": "Continuar conversa",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "b3abac64-ec60-4dff-9b55-11bb16214d87",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "c076d138-55ff-40f0-b069-c620a81b114d",
              "typeOfStateId": "state",
              "$connId": "con_88",
              "$contentId": "baaef615-9732-42eb-9386-30bded0302ca",
              "$id": "27dff520-9879-4429-ac5b-de427eed9aeb",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*finalizar.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "86267283-0c6d-4a62-89da-ea84ef45f01e",
              "typeOfStateId": "state",
              "$connId": "con_93",
              "$contentId": "baaef615-9732-42eb-9386-30bded0302ca",
              "$id": "590ab23c-9578-459d-8168-481c4d1f34e4",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*continuar.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "2828da9e-47b0-445c-ab0a-001b9a0a3c40",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Inatividade usuario horario",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "fe1655c7-c5bf-416b-bdcc-587c7b609233",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Inatividade usuario horario conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            },
            {
              "$id": "ec0f834e-6248-41bb-44e1-7f18f3c0d75c",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - set entrypoint",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(input) {\n\tif(input == 'Olá! Eu vim no site Camicado e quero falar com vocês.') {\n\t\treturn \"Site\";\n\t}\n\n\tif(input == 'Olá! Eu vim no site Camicado e gostaria de ser atendido por vocês.') {\n\t\treturn \"Site - Atendimento\";\n\t}\n\n\tif(input == 'Olá! Estava no perfil do Instagram da Camicado e gostaria de conversar com vocês.') {\n\t\treturn \"Instagram\";\n\t}\n\n\tif(input == 'Ola! Eu vim do Instagram Camicado e gostaria de conversar com vocês. Bora?') {\n\t\treturn \"Linktree\";\n\t}\n\n\tif(input == 'Oi, gostaria de falar sobre uma venda para empresa') {\n\t\treturn \"Empresa\";\n\t}\n\treturn \"N/A\";\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "entrypoint",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "b8aa3909-220d-c4ba-926c-366cf2deabcd",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "EntryPoint",
                "action": "{{entrypoint}}"
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "exists",
                  "values": [],
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            },
            {
              "$id": "1a886526-a530-9601-0c29-8a31560a13fd",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - set entrypoint",
              "$invalid": false,
              "settings": {
                "extras": {
                  "entrypoint": "{{entrypoint}}"
                }
              },
              "conditions": [
                {
                  "values": [],
                  "source": "context",
                  "comparison": "exists",
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Finalizar conversa",
            "Continuar conversa"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "339dd05b-bab3-42e2-a587-bcd655b86ee6",
          "root": false,
          "$title": "[I.2] Inatividade check option",
          "$position": {
            "top": "4038px",
            "left": "2447px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "82cf8d0a-e89a-4d7b-98b3-e7b8a882a877": {
          "$contentActions": [
            {
              "action": {
                "$id": "7da52488-b62f-4fa5-84f0-4df5a7c4438f",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "5e9241c1-9174-49a9-813b-69eaa823a1bf",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "5e9241c1-9174-49a9-813b-69eaa823a1bf",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "2f81b6f8-319e-422d-be82-927543a1b56c",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "1a88511c-4956-4bc2-bfd7-701aa3d2cb9a",
                  "type": "text/plain",
                  "content": "O horário de atendimento da nossa equipe de especialistas foi encerrado! 😕\n\nEntre em contato novamente dentro do horário:\n\n⏰ *Segunda a Sexta: 8h30 às 20h30.*\n⏰ *Sábado: 8h45 às 15h.*",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "1a88511c-4956-4bc2-bfd7-701aa3d2cb9a",
                    "type": "text/plain",
                    "content": "O horário de atendimento da nossa equipe de especialistas foi encerrado! 😕\n\nEntre em contato novamente dentro do horário:\n\n⏰ *Segunda a Sexta: 8h30 às 20h30.*\n⏰ *Sábado: 8h45 às 15h.*"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "2f0a332e-347e-4b60-9732-621ee3faa079",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "7b0859f0-7a5c-4f77-86d8-4be72b1b37b4",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Inatividade usuario fora horario",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "97a787f0-28df-48d0-b424-237210a0c81a",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Inatividade usuario fora horario conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            },
            {
              "$id": "23e9c68e-c005-c6bf-28a3-41772228e904",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - set entrypoint",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(input) {\n\tif(input == 'Olá! Eu vim no site Camicado e quero falar com vocês.') {\n\t\treturn \"Site\";\n\t}\n\n\tif(input == 'Olá! Eu vim no site Camicado e gostaria de ser atendido por vocês.') {\n\t\treturn \"Site - Atendimento\";\n\t}\n\n\tif(input == 'Olá! Estava no perfil do Instagram da Camicado e gostaria de conversar com vocês.') {\n\t\treturn \"Instagram\";\n\t}\n\n\tif(input == 'Ola! Eu vim do Instagram Camicado e gostaria de conversar com vocês. Bora?') {\n\t\treturn \"Linktree\";\n\t}\n\n\tif(input == 'Oi, gostaria de falar sobre uma venda para empresa') {\n\t\treturn \"Empresa\";\n\t}\n\treturn \"N/A\";\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "entrypoint",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "ce646b99-c111-1b3a-4ba8-80aedf06fc6d",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "EntryPoint",
                "action": "{{entrypoint}}"
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "exists",
                  "values": [],
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            },
            {
              "$id": "c2ed38ac-f5e3-fdaf-9a8e-4f5091bee6b7",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - set entrypoint",
              "$invalid": false,
              "settings": {
                "extras": {
                  "entrypoint": "{{entrypoint}}"
                }
              },
              "conditions": [
                {
                  "values": [],
                  "source": "context",
                  "comparison": "exists",
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "c076d138-55ff-40f0-b069-c620a81b114d",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "82cf8d0a-e89a-4d7b-98b3-e7b8a882a877",
          "root": false,
          "$title": "[I.3] Inatividade usuario fora horario",
          "$position": {
            "top": "4324px",
            "left": "2586.14px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "cb80e13c-5152-49fe-8142-b14d1b099b5c": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "99b28af3-fefc-4d99-b5cd-d99c142bdf89",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "cb80e13c-5152-49fe-8142-b14d1b099b5c",
          "root": false,
          "$title": "[I.2.2] Inatividade usuario horario",
          "$position": {
            "top": "4329.43px",
            "left": "2294px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "8f900e98-9a10-4162-9c5e-16e273d6ff33": {
          "$contentActions": [
            {
              "action": {
                "$id": "a1b4d7a5-d747-435e-a659-8b58f10b2d9e",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "6b099dbc-0fd1-4fdb-be12-20f5e2d3d139",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "6b099dbc-0fd1-4fdb-be12-20f5e2d3d139",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "11d5a8b7-a21a-4935-9dff-748bef4fd61c",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "77271619-6919-4a43-8055-ca2b041fa7ed",
                  "type": "text/plain",
                  "content": "Normalmente o seu atendimento seria transferido a umas de nossas especialistas. Mas no momento estamos fora no nosso horário de funcionamento. 😕\n\n⏰ *Segunda a Sexta: 8h30 às 20h30.*\n⏰ *Sábado: 8h45 às 15h.*\n\nMas não se preocupe, vamos entrar em contato com você assim que possível.",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "77271619-6919-4a43-8055-ca2b041fa7ed",
                    "type": "text/plain",
                    "content": "Normalmente o seu atendimento seria transferido a umas de nossas especialistas. Mas no momento estamos fora no nosso horário de funcionamento. 😕\n\n⏰ *Segunda a Sexta: 8h30 às 20h30.*\n⏰ *Sábado: 8h45 às 15h.*\n\nMas não se preocupe, vamos entrar em contato com você assim que possível."
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "31eb689b-9f92-45ba-ad0c-bba38cee515a",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "3a844488-3c29-44dd-ab31-e7897b40ea4c",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Erro persistente fora horario",
                "action": "Exibicao"
              },
              "conditions": []
            },
            {
              "$id": "5a63bdc8-4913-4a60-9615-cf63d72bd607",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - set queue",
              "$invalid": false,
              "settings": {
                "extras": {
                  "queue": "waitingForService"
                }
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "$invalid": false,
            "typeOfStateId": "state",
            "stateId": "c076d138-55ff-40f0-b069-c620a81b114d"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "8f900e98-9a10-4162-9c5e-16e273d6ff33",
          "root": false,
          "$title": "Erro persistente fora horario",
          "$position": {
            "top": "464px",
            "left": "2630px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "35e2554f-1872-4c9b-9d84-de86ed97f134": {
          "$contentActions": [
            {
              "action": {
                "$id": "74d87961-e9d4-4708-a64e-9a71c10a92aa",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "41ebd5eb-ddf9-4fc6-90c7-0f05192d7fa5",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "41ebd5eb-ddf9-4fc6-90c7-0f05192d7fa5",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "9925794b-7501-4f9a-be76-a007e0666933",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "0efda459-e961-4d8d-8f87-8d916afd7670",
                  "type": "text/plain",
                  "content": "Desculpa, não estou conseguindo entender o que você precisa. 🤔\n\nMas vou chamar uma especialista para ajudar você! 🙋‍♀️",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "0efda459-e961-4d8d-8f87-8d916afd7670",
                    "type": "text/plain",
                    "content": "Desculpa, não estou conseguindo entender o que você precisa. 🤔\n\nMas vou chamar uma especialista para ajudar você! 🙋‍♀️"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "2da7bc0d-bb34-4aa8-bbc3-12ebff1f8811",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "ac96063d-67b8-4220-9b43-f8de0a99a409",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Erro persistente horario",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "582b5645-9273-4283-a6f0-f48659d97c52",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Erro persistente horario conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "$invalid": false,
            "typeOfStateId": "state",
            "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "35e2554f-1872-4c9b-9d84-de86ed97f134",
          "root": false,
          "$title": "[E.1.3] Erro persistente horario",
          "$position": {
            "top": "458px",
            "left": "2328px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "b1ecaba1-e7d7-4ec1-8aa6-994f40fa36be": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "26c2a0b1-6b9a-46bb-bba3-47200e340761",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "041ce406-4bf2-4cf2-968e-7d48c7a4091d",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Erro persistente",
                "action": "Exibicao"
              },
              "conditions": []
            },
            {
              "$id": "c2c444f2-2386-4c84-9002-d110c765dee7",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável",
              "$invalid": false,
              "settings": {
                "variable": "numErro",
                "value": "1"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "12eac8d4-18e2-406c-b5a4-eef7924e620a",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "b1ecaba1-e7d7-4ec1-8aa6-994f40fa36be",
          "root": false,
          "$title": "[E.1] Erro persistente",
          "$position": {
            "top": "174px",
            "left": "2488px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "803c3a1e-5f20-40e9-8561-0eea507afadb": {
          "$contentActions": [
            {
              "action": {
                "$id": "75b1facb-6864-475c-98f8-012d6f3c72f0",
                "$typeOfContent": "",
                "type": "SendMessage",
                "settings": {
                  "id": "00000000-0000-0000-0000-000000000002",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "00000000-0000-0000-0000-000000000002",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left",
                  "editing": false
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "381157dd-4df5-445e-8217-e29be97f6da3",
                "$typeOfContent": "",
                "type": "SendMessage",
                "settings": {
                  "id": "00000000-0000-0000-0000-000000000003",
                  "type": "text/plain",
                  "content": "Desculpe, não consegui te entender. 😕\n\nResponda com uma das opções apresentadas. 😉",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "00000000-0000-0000-0000-000000000003",
                    "type": "text/plain",
                    "content": "Desculpe, não consegui te entender. 😕\n\nResponda com uma das opções apresentadas. 😉"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left",
                  "editing": false
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "f4ce8f70-54c0-4902-bb31-0d01c7235cfd",
                    "type": "text/plain",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "b1ecaba1-e7d7-4ec1-8aa6-994f40fa36be",
              "typeOfStateId": "state",
              "$connId": "con_98",
              "$id": "560318e3-decf-4865-804c-d75809c97e3a",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "greaterThanOrEquals",
                  "values": [
                    "3"
                  ],
                  "variable": "numErro"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "770c1fbc-09f8-444d-88fa-90ee0fb2a968",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Erro generico",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "$invalid": false,
            "typeOfStateId": "variable",
            "stateId": "{{statePreviousId}}"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "803c3a1e-5f20-40e9-8561-0eea507afadb",
          "$title": "[E.0] Erro generico",
          "$position": {
            "top": "37px",
            "left": "2505px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "8feebdee-1e2b-4041-a5fd-17e94bb8d026": {
          "$contentActions": [
            {
              "action": {
                "$id": "ad5d1dc7-b5f7-4424-9f8a-af1f61dd4953",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "3c0b18e0-f4fb-47a7-a1df-f0d18b9b1d79",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "3c0b18e0-f4fb-47a7-a1df-f0d18b9b1d79",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "17d1079b-6730-4513-9369-47f2dc8de76d",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "bb50aa8f-774c-49c2-9228-34452a45a645",
                  "type": "text/plain",
                  "content": "Ops, vi que você mandou um *vídeo*! Infelizmente nesta parte da conversa, eu não consigo entender. 😔 \n\nMe explica por texto ou seguindo uma opção que apresentei?",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "bb50aa8f-774c-49c2-9228-34452a45a645",
                    "type": "text/plain",
                    "content": "Ops, vi que você mandou um *vídeo*! Infelizmente nesta parte da conversa, eu não consigo entender. 😔 \n\nMe explica por texto ou seguindo uma opção que apresentei?"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "975f2f9e-2f57-4baa-83e9-63500b2e8485",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "f3f03619-d3b2-45ee-8f2c-23f520f0bd6c",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Erro video",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "$invalid": false,
            "typeOfStateId": "variable",
            "stateId": "{{statePreviousId}}"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "8feebdee-1e2b-4041-a5fd-17e94bb8d026",
          "root": false,
          "$title": "[E.2] Erro video",
          "$position": {
            "top": "33px",
            "left": "2718px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "5e59ed65-1db2-4f05-af11-397e94381514": {
          "$contentActions": [
            {
              "action": {
                "$id": "284fab93-3768-4e0e-9999-86e1352ea8e8",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "cb53ba3a-a372-435f-89fb-246749aa2515",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "cb53ba3a-a372-435f-89fb-246749aa2515",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "73eb597b-c0d7-4ab8-8f8b-7a340a572bcb",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "024a1c81-1f85-4372-8faa-ccf85558e9e9",
                  "type": "text/plain",
                  "content": "Ops, vi que você mandou um *arquivo*! Infelizmente nesta parte da conversa, eu não consigo entender.  😔 \n\nMe explica por texto ou seguindo uma opção que apresentei?",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "024a1c81-1f85-4372-8faa-ccf85558e9e9",
                    "type": "text/plain",
                    "content": "Ops, vi que você mandou um *arquivo*! Infelizmente nesta parte da conversa, eu não consigo entender.  😔 \n\nMe explica por texto ou seguindo uma opção que apresentei?"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "d1d5306d-5868-48e6-adbe-71dd8785cf60",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "7fdb5205-2408-4f84-ae8f-21e5e749a4b1",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Erro arquivo",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "$invalid": false,
            "typeOfStateId": "variable",
            "stateId": "{{statePreviousId}}"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "5e59ed65-1db2-4f05-af11-397e94381514",
          "root": false,
          "$title": "[E.3] Erro arquivo",
          "$position": {
            "top": "175px",
            "left": "2737px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "8fbd17bf-b21e-448f-82b1-bf989c60133e": {
          "$contentActions": [
            {
              "action": {
                "$id": "5d8d9fac-4d60-49b8-abbb-807b312b5130",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "7663b9a7-ee42-4f58-a08a-fc86703a74bd",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "7663b9a7-ee42-4f58-a08a-fc86703a74bd",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "574225c9-4557-4e30-917b-a116555c92d1",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "d70fc048-c912-4dce-b607-f8b6849dd65f",
                  "type": "text/plain",
                  "content": "Ops, vi que você mandou um *áudio*! Infelizmente nesta parte da conversa, eu não consigo entender.  😔 \n\nMe explica por texto ou seguindo uma opção que apresentei?",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "d70fc048-c912-4dce-b607-f8b6849dd65f",
                    "type": "text/plain",
                    "content": "Ops, vi que você mandou um *áudio*! Infelizmente nesta parte da conversa, eu não consigo entender.  😔 \n\nMe explica por texto ou seguindo uma opção que apresentei?"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "1e7d2d8e-2dde-40bd-8c56-c5769a861477",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "0d8680a2-f8be-45e4-9f07-06271df2393c",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Erro audio",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "$invalid": false,
            "typeOfStateId": "variable",
            "stateId": "{{statePreviousId}}"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "8fbd17bf-b21e-448f-82b1-bf989c60133e",
          "root": false,
          "$title": "[E.5] Erro audio",
          "$position": {
            "top": "170px",
            "left": "2962px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "8236c51a-fff1-4ad4-97c4-0841661e5dab": {
          "$contentActions": [
            {
              "action": {
                "$id": "82ff1b53-0f9d-42aa-9627-6240083dad72",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "89338968-c50a-40db-8115-4bae1206ffa4",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "89338968-c50a-40db-8115-4bae1206ffa4",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "d6ae2790-88d9-467b-85ea-d020bc25e45c",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "eb7772f2-fc25-49f5-894b-5e26f5546cf5",
                  "type": "text/plain",
                  "content": "Ops, vi que você mandou uma *imagem*! Infelizmente nesta parte da conversa, eu não consigo entender. 😔 \n\nMe explica por texto ou seguindo uma opção que apresentei?",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "eb7772f2-fc25-49f5-894b-5e26f5546cf5",
                    "type": "text/plain",
                    "content": "Ops, vi que você mandou uma *imagem*! Infelizmente nesta parte da conversa, eu não consigo entender. 😔 \n\nMe explica por texto ou seguindo uma opção que apresentei?"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "27f4e830-1c6b-4ad8-9fb4-2843e2b9a257",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "de9ec3e7-07be-43ff-b2bd-cb524f04b02b",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "REGISTRO DE EVENTOS - EXIBICAO",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Erro imagem",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "$invalid": false,
            "typeOfStateId": "variable",
            "stateId": "{{statePreviousId}}"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-14439f22-f009-f6d8-eefb-27b745df017b",
              "canChangeBackground": false
            }
          ],
          "id": "8236c51a-fff1-4ad4-97c4-0841661e5dab",
          "root": false,
          "$title": "[E.4] Erro imagem",
          "$position": {
            "top": "29.6667px",
            "left": "2945px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "d557bccb-c1be-4adb-a591-2b02d1ea9415": {
          "$contentActions": [
            {
              "action": {
                "$id": "2c53cdeb-7a7e-4296-a0c8-87315b235153",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "168392cb-0b35-497a-93e2-428eef39d734",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "168392cb-0b35-497a-93e2-428eef39d734",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "dd277c51-45e4-4856-8744-f87c94ea0dce",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "d3f5c8d9-258b-4c6d-aee3-c1593c1b6564",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*O que deseja fazer agora?*\n\nEscolha uma das opções. 😉",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Voltar ao menu",
                        "previewText": "Voltar ao menu",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Encerrar conversa",
                        "previewText": "Encerrar conversa",
                        "value": null,
                        "index": 1,
                        "type": null
                      },
                      {
                        "index": -1,
                        "text": "Falar com atendente",
                        "previewText": "Falar com atendente",
                        "type": null,
                        "value": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "d3f5c8d9-258b-4c6d-aee3-c1593c1b6564",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*O que deseja fazer agora?*\n\nEscolha uma das opções. 😉",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Voltar ao menu",
                          "previewText": "Voltar ao menu",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Encerrar conversa",
                          "previewText": "Encerrar conversa",
                          "value": null,
                          "index": 1,
                          "type": null
                        },
                        {
                          "index": -1,
                          "text": "Falar com atendente",
                          "previewText": "Falar com atendente",
                          "type": null,
                          "value": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "16c0f1cd-f498-4193-bfa5-3cfb8d37faf3",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "52b31d32-bb47-43c7-a4c2-fc82ce681bc6",
              "typeOfStateId": "state",
              "$connId": "con_103",
              "$contentId": "dd277c51-45e4-4856-8744-f87c94ea0dce",
              "$id": "d9024da5-d2e0-475a-bc15-a215e0d05fac",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*menu.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "af1a68ef-0b01-4db6-9147-2d3b2c664579",
              "typeOfStateId": "state",
              "$connId": "con_108",
              "$contentId": "dd277c51-45e4-4856-8744-f87c94ea0dce",
              "$id": "10e20c77-6426-4b60-b000-26c511d81c37",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*encerrar.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1",
              "typeOfStateId": "state",
              "$connId": "con_113",
              "$contentId": "dd277c51-45e4-4856-8744-f87c94ea0dce",
              "$id": "4ccc390e-bc22-4865-95ac-1061fc3438aa",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "equals",
                  "values": [
                    "(?i)(.*atendente.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "260ae7be-ae85-4a00-9ad7-725376bf8ef7",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Algo mais",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "78d98aff-634e-45d5-8c48-ffb76a088d3e",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Algo mais conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Voltar ao menu",
            "Encerrar conversa",
            "Falar com atendente"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "d557bccb-c1be-4adb-a591-2b02d1ea9415",
          "root": false,
          "$title": "Algo mais",
          "$position": {
            "top": "4050px",
            "left": "3519.25px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "c076d138-55ff-40f0-b069-c620a81b114d": {
          "$contentActions": [
            {
              "action": {
                "$id": "f1b85fea-4adc-4d62-a507-8ddeae86055a",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "c223ddcb-f6ec-4925-bd65-c812f8b4045b",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "c223ddcb-f6ec-4925-bd65-c812f8b4045b",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "848575d8-a987-4ff0-85fa-806a69e66c15",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "a4b8588e-e8b1-4818-9a80-1bd2c5eeabe8",
                  "type": "text/plain",
                  "content": "Muito obrigada pelo contato, pode me chamar sempre que precisar! \n😁\n\nAté a próxima! 👋",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "a4b8588e-e8b1-4818-9a80-1bd2c5eeabe8",
                    "type": "text/plain",
                    "content": "Muito obrigada pelo contato, pode me chamar sempre que precisar! \n😁\n\nAté a próxima! 👋"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "e5f83cad-9fdf-4a9e-a331-648fc40213cd",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "4f5c29c0-2c1f-4494-89a2-aba97eeb3ee6",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Encerrar",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "aabe21fd-08b1-41eb-ac6a-2df0df00dc65",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Encerrar conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "00132ad9-4c49-4674-8ef4-7be8215ddead",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "c076d138-55ff-40f0-b069-c620a81b114d",
          "root": false,
          "$title": "Encerrar",
          "$position": {
            "top": "4714.33px",
            "left": "3513.67px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "af1a68ef-0b01-4db6-9147-2d3b2c664579": {
          "$contentActions": [
            {
              "action": {
                "$id": "ec8fa03a-48b8-4ef4-986b-15c20285a4b3",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "3240c72d-9781-4fcc-bd6c-e7221177c519",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "3240c72d-9781-4fcc-bd6c-e7221177c519",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "2d19f91e-2b86-40f9-99f2-8c4659097c82",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "9387e098-f135-400d-9315-cbb95577c65f",
                  "type": "text/plain",
                  "content": "A sua opinião é muito importante para que eu consiga te atender cada vez melhor! ",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "9387e098-f135-400d-9315-cbb95577c65f",
                    "type": "text/plain",
                    "content": "A sua opinião é muito importante para que eu consiga te atender cada vez melhor! "
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "33d86ecb-200c-44ed-99f2-f625f25a2c39",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "d208d4b2-43fd-408e-9483-9b500ab6d776",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "d208d4b2-43fd-408e-9483-9b500ab6d776",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "80c4da61-ce3b-4ec2-9aaa-2d7921379d85",
                "$typeOfContent": "raw-content",
                "type": "SendRawMessage",
                "settings": {
                  "metadata": {},
                  "type": "application/json",
                  "rawContent": "{\n   \"recipient_type\": \"individual\",\n   \"type\": \"interactive\",\n   \"interactive\": {\n      \"type\": \"list\",\n      \"header\": {\n         \"type\": \"text\",\n         \"text\": \"\"\n      },\n      \"body\": {\n         \"text\": \"*Por isso, gostaria de saber o que você achou da nossa conversa.* 😊\\n\\nToque no botão para dar a sua nota.👇\"\n      },\n      \"action\": {\n         \"button\": \"Dar nota\",\n         \"sections\": [\n            {\n               \"title\": \"Dê sua nota de 1 a 5\",\n               \"rows\": [\n                  {\n                     \"id\": \"ID 1.1\",\n                     \"title\": \"Muito fácil 😁\",\n                     \"description\":\"Achei super fácil de entender\"\n                  },\n                  {\n                     \"id\": \"ID 1.2\",\n                     \"title\": \"Fácil 🙂\",\n                     \"description\":\"Não tive muita dificuldade\"\n                  },\n                  {\n                     \"id\": \"ID 1.3\",\n                     \"title\": \"Mais ou menos 🤔\",\n                     \"description\": \"Não foi fácil nem difícil\"\n                  },\n                  {\n                     \"id\": \"ID 1.4\",\n                     \"title\": \"Difícil 😕\",\n                     \"description\": \"Tive algumas dificuldades\"\n                  },\n                  {\n                     \"id\": \"ID 1.5\",\n                     \"title\": \"Muito difícil 😩\",\n                     \"description\":\"Tive muitas dificuldades\"\n                  }\n               ]\n            }\n         ]\n      }\n   }\n}"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "82d466ea-04a8-41b4-bd4e-29941f8df344",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "notaCES"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false,
                "variable": "notaCES"
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "204196b1-95cc-49e5-a532-05c12ddc69fe",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Pesquisa CES",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "e7feadf7-64e1-4a57-a646-5ebb4c9b7a7e",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Pesquisa CES conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            },
            {
              "$id": "83afd8f6-a815-4866-9bf0-b29263ccfd06",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "action": "{{contact.name}} | {{contact.identity}} | {{input.content}}",
                "category": "Pesquisa CES v2"
              },
              "conditions": []
            },
            {
              "$id": "2aebf4c6-d54d-42cb-b4d4-5bc2a74dc783",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - set nota CES",
              "$invalid": false,
              "settings": {
                "extras": {
                  "Nota CES": "{{notaCES}}"
                }
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "5309855d-374f-461f-8aca-7e32b3b659b3",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "af1a68ef-0b01-4db6-9147-2d3b2c664579",
          "root": false,
          "$title": "Pesquisa CES",
          "$position": {
            "top": "4175px",
            "left": "3511px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "5309855d-374f-461f-8aca-7e32b3b659b3": {
          "$contentActions": [
            {
              "action": {
                "$id": "811b2e38-aa2f-4312-ab22-caa22fc41471",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "5906aa6a-3593-4692-aea0-6699936dc264",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "5906aa6a-3593-4692-aea0-6699936dc264",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "aaf88d63-affb-42a9-99da-d2ec9107c68e",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "fd0eaf8c-cccc-4981-a6a1-235e0840d7a4",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "Você quer *fazer um comentário* sobre a nota?",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Sim",
                        "previewText": "Sim",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Não",
                        "previewText": "Não",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "fd0eaf8c-cccc-4981-a6a1-235e0840d7a4",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "Você quer *fazer um comentário* sobre a nota?",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Sim",
                          "previewText": "Sim",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Não",
                          "previewText": "Não",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "c4ffd2ed-e856-4cc4-ab1f-dbb82e47adc1",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "608fba4f-ef04-43b6-8ded-01703fa36ca4",
              "typeOfStateId": "state",
              "$connId": "con_118",
              "$id": "14daf350-ecfc-4a5b-96db-1b97ee380a3d",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*sim.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "c315ac34-7d1e-4353-b04a-d50c73edfa03",
              "typeOfStateId": "state",
              "$connId": "con_123",
              "$id": "c97b463d-ec38-45d9-aae5-c34b645feb12",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*n[aAãÃ]o.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "0b987c9b-ab28-4cdb-8ca1-91724255770f",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Colhe comentario ces",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "898b8656-4e63-4844-b6dc-1aa55429d9b3",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Colhe comentario ces conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Sim",
            "Não"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "5309855d-374f-461f-8aca-7e32b3b659b3",
          "root": false,
          "$title": "Colhe comentario ces",
          "$position": {
            "top": "4295px",
            "left": "3507px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "608fba4f-ef04-43b6-8ded-01703fa36ca4": {
          "$contentActions": [
            {
              "action": {
                "$id": "f27e33b4-fc1c-450d-be7b-fcd3f2f620dd",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "889b1f9b-683f-47d1-87d9-b4c2e200d8c8",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "889b1f9b-683f-47d1-87d9-b4c2e200d8c8",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "f8af30e4-894e-4731-9042-8cf04946178f",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "23bc5fa1-915f-40b5-be7f-89a4838c5cb8",
                  "type": "text/plain",
                  "content": "Certo, preciso que você envie tudo em *uma mensagem* só, ok?\n\nFique à vontade para fazer o seu comentário. 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "23bc5fa1-915f-40b5-be7f-89a4838c5cb8",
                    "type": "text/plain",
                    "content": "Certo, preciso que você envie tudo em *uma mensagem* só, ok?\n\nFique à vontade para fazer o seu comentário. 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "9fb08960-b7f2-452b-803e-9ae617e179a1",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "a793f7d5-2c9f-4f85-97ac-f2088fd2d809",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Comentario CES",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "6aa6f945-a588-405f-9795-b60922cfa126",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Comentario CES conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            },
            {
              "$id": "fb610764-7835-4524-832f-2e621b14d376",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Comentario CES v2",
                "action": "{{contact.name}} | {{contact.identity}} | {{input.content}}"
              },
              "conditions": []
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "27bb8bf3-3426-415e-acb9-98e576425afd",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "608fba4f-ef04-43b6-8ded-01703fa36ca4",
          "root": false,
          "$title": "Comentario CES",
          "$position": {
            "top": "4428.11px",
            "left": "3364.11px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "86267283-0c6d-4a62-89da-ea84ef45f01e": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "92adbc41-3bdc-4e6a-845b-d0c46a881a75",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "cb80e13c-5152-49fe-8142-b14d1b099b5c",
              "typeOfStateId": "state",
              "$connId": "con_128",
              "$id": "41101d0f-cc57-43aa-924a-834bca826979",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "true"
                  ],
                  "variable": "isWorkTime"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "99e7471e-64f0-4fc3-9604-93b309f09d20",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - is work time",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "// Receive the variables as parameters\nfunction run(offset,workDays, startMonday, endMonday, startTuesday, endTuesday, startWednesday, endWednesday, startThursday, endThursday, startFriday, endFriday, startSaturday, endSaturday, startSunday, endSunday) {\n\n    offset = parseInt(offset);\n    let today = nowUTC(offset);\n    let week = today.getDay()\n\n    let startDate = null;\n    let endDate = null;\n\n    switch(week){\n        case 1:\n            startDate = utcDate(startMonday, today);\n            endDate = utcDate(endMonday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n            \n        case 2 :\n            startDate = utcDate(startTuesday, today);\n            endDate = utcDate(endTuesday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n\n        case 3:\n            startDate = utcDate(startWednesday, today);\n            endDate = utcDate(endWednesday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 4:\n            startDate = utcDate(startThursday, today);\n            endDate = utcDate(endThursday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 5:\n            startDate = utcDate(startFriday, today);\n            endDate = utcDate(endFriday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 6:\n            startDate = utcDate(startSaturday, today);\n            endDate = utcDate(endSaturday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 0:\n            startDate = utcDate(startSunday, today);\n            endDate = utcDate(endSunday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays); \n    }\n\n    return false;\n   /*  let startDate = utcDate(start, today);\n    let endDate = utcDate(end, today);\n\n    \n    return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays); */\n}\n\n//Get now UTC Date\nfunction nowUTC(offset) {\n    let now = new Date;\n    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),\n        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());\n\n    return new Date(utc_timestamp + offset * 3600 * 1000);\n}\n\n//Get UTC Date\nfunction utcDate(timeString, today) {\n    let now = new Date;\n\n    let hour = getValueByString('hour', timeString);\n    let minutes = getValueByString('minutes', timeString);\n    let utc_timestamp = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(),\n        hour, minutes, 0, 0);\n    return new Date(utc_timestamp);\n}\n\n//Get hour/minute by string with pattern HH:mm\nfunction getValueByString(type, timeString) {\n\n    if (type === 'hour') {\n        return parseInt(timeString.substring(0, timeString.indexOf(':')));\n    }\n\n    else if (type === 'minutes') {\n        return parseInt(timeString.substring(timeString.indexOf(':') + 1, timeString.length));\n    }\n\n    return 0;\n}\n\n//Get if today is a work day\nfunction isWorkDay(today, workDays) {\n    workDays = workDays.split(',');\n\n    return workDays.indexOf(today.getDay().toString()) >= 0;\n}\n",
                "inputVariables": [
                  "config.dateTimeOffset",
                  "config.workDays",
                  "config.startDateMonday",
                  "config.endDateMonday",
                  "config.startDateTuesday",
                  "config.endDateTuesday",
                  "config.startDateWednesday",
                  "config.endDateWednesday",
                  "config.startDateThursday",
                  "config.endDateThursday",
                  "config.startDateFriday",
                  "config.endDateFriday",
                  "config.startDateSaturday",
                  "config.endDateSaturday",
                  "config.startDateSunday",
                  "config.endDateSunday"
                ],
                "outputVariable": "isWorkTime",
                "LocalTimeZoneEnabled": false
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "notExists",
                  "values": [],
                  "variable": "placeSelected"
                }
              ]
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "82cf8d0a-e89a-4d7b-98b3-e7b8a882a877",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "86267283-0c6d-4a62-89da-ea84ef45f01e",
          "root": false,
          "$title": "Verifica horario atendimento inatividade",
          "$position": {
            "top": "4182px",
            "left": "2439px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "12eac8d4-18e2-406c-b5a4-eef7924e620a": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "92adbc41-3bdc-4e6a-845b-d0c46a881a75",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "35e2554f-1872-4c9b-9d84-de86ed97f134",
              "typeOfStateId": "state",
              "$connId": "con_133",
              "$id": "41101d0f-cc57-43aa-924a-834bca826979",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "true"
                  ],
                  "variable": "isWorkTime"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "99e7471e-64f0-4fc3-9604-93b309f09d20",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - is work time",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "// Receive the variables as parameters\nfunction run(offset,workDays, startMonday, endMonday, startTuesday, endTuesday, startWednesday, endWednesday, startThursday, endThursday, startFriday, endFriday, startSaturday, endSaturday, startSunday, endSunday) {\n\n    offset = parseInt(offset);\n    let today = nowUTC(offset);\n    let week = today.getDay()\n\n    let startDate = null;\n    let endDate = null;\n\n    switch(week){\n        case 1:\n            startDate = utcDate(startMonday, today);\n            endDate = utcDate(endMonday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n            \n        case 2 :\n            startDate = utcDate(startTuesday, today);\n            endDate = utcDate(endTuesday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n\n        case 3:\n            startDate = utcDate(startWednesday, today);\n            endDate = utcDate(endWednesday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 4:\n            startDate = utcDate(startThursday, today);\n            endDate = utcDate(endThursday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 5:\n            startDate = utcDate(startFriday, today);\n            endDate = utcDate(endFriday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 6:\n            startDate = utcDate(startSaturday, today);\n            endDate = utcDate(endSaturday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays);\n        case 0:\n            startDate = utcDate(startSunday, today);\n            endDate = utcDate(endSunday, today);    \n            return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays); \n    }\n\n    return false;\n   /*  let startDate = utcDate(start, today);\n    let endDate = utcDate(end, today);\n\n    \n    return ((today - startDate) > 0) && ((endDate - today) > 0) && isWorkDay(today, workDays); */\n}\n\n//Get now UTC Date\nfunction nowUTC(offset) {\n    let now = new Date;\n    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),\n        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());\n\n    return new Date(utc_timestamp + offset * 3600 * 1000);\n}\n\n//Get UTC Date\nfunction utcDate(timeString, today) {\n    let now = new Date;\n\n    let hour = getValueByString('hour', timeString);\n    let minutes = getValueByString('minutes', timeString);\n    let utc_timestamp = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(),\n        hour, minutes, 0, 0);\n    return new Date(utc_timestamp);\n}\n\n//Get hour/minute by string with pattern HH:mm\nfunction getValueByString(type, timeString) {\n\n    if (type === 'hour') {\n        return parseInt(timeString.substring(0, timeString.indexOf(':')));\n    }\n\n    else if (type === 'minutes') {\n        return parseInt(timeString.substring(timeString.indexOf(':') + 1, timeString.length));\n    }\n\n    return 0;\n}\n\n//Get if today is a work day\nfunction isWorkDay(today, workDays) {\n    workDays = workDays.split(',');\n\n    return workDays.indexOf(today.getDay().toString()) >= 0;\n}\n",
                "inputVariables": [
                  "config.dateTimeOffset",
                  "config.workDays",
                  "config.startDateMonday",
                  "config.endDateMonday",
                  "config.startDateTuesday",
                  "config.endDateTuesday",
                  "config.startDateWednesday",
                  "config.endDateWednesday",
                  "config.startDateThursday",
                  "config.endDateThursday",
                  "config.startDateFriday",
                  "config.endDateFriday",
                  "config.startDateSaturday",
                  "config.endDateSaturday",
                  "config.startDateSunday",
                  "config.endDateSunday"
                ],
                "outputVariable": "isWorkTime",
                "LocalTimeZoneEnabled": false
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "notExists",
                  "values": [],
                  "variable": "placeSelected"
                }
              ]
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [],
          "id": "12eac8d4-18e2-406c-b5a4-eef7924e620a",
          "root": false,
          "$title": "[E.1.1] Erro persistente verifica horario",
          "$position": {
            "top": "317px",
            "left": "2490px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "c6f4f2a5-e95d-4c45-b608-7c7d486ec06e": {
          "$contentActions": [
            {
              "action": {
                "$id": "027c54b8-4d2f-4c9d-8ab0-fc3d55b6189d",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "8746da72-fb00-482c-ab7c-1700b4e3da0e",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "8746da72-fb00-482c-ab7c-1700b4e3da0e",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "28100415-c3dc-4b99-b9d9-766019e1c063",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "094600c7-54fd-4ac9-8a30-c3ed15909e44",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "Você informou que seu nome é:\n\n👉 *{{userName}}*\n\nA informação está correta?",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Sim",
                        "previewText": "Sim",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Não",
                        "previewText": "Não",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "094600c7-54fd-4ac9-8a30-c3ed15909e44",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "Você informou que seu nome é:\n\n👉 *{{userName}}*\n\nA informação está correta?",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Sim",
                          "previewText": "Sim",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Não",
                          "previewText": "Não",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "3286cc9e-d12e-4704-ad1c-9ec2b42fd118",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "38b71af3-a8be-4a99-8bdb-55b64fb55e62",
              "typeOfStateId": "state",
              "$connId": "con_138",
              "$id": "36ea1717-54bc-4e9e-b1b4-8eaf012c51e7",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*sim.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "473dcfb5-5f5c-4e24-8d4c-62d14b5b82b6",
              "typeOfStateId": "state",
              "$connId": "con_143",
              "$id": "8f41b9bb-2656-48c0-9de1-4a8ab2dcfb4d",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*n[aAãÃ]o.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "52033fa9-a45a-4367-8ddf-e9d436602107",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Nome Invalido",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "eee14c72-4862-4d21-8047-ab39768283d8",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Nome Invalido conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            },
            {
              "$id": "ca51f140-d98f-b1a5-b0d3-ce21d60befe0",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - set entrypoint",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(input) {\n\tif(input == 'Olá! Eu vim no site Camicado e quero falar com vocês.') {\n\t\treturn \"Site\";\n\t}\n\n\tif(input == 'Olá! Eu vim no site Camicado e gostaria de ser atendido por vocês.') {\n\t\treturn \"Site - Atendimento\";\n\t}\n\n\tif(input == 'Olá! Estava no perfil do Instagram da Camicado e gostaria de conversar com vocês.') {\n\t\treturn \"Instagram\";\n\t}\n\n\tif(input == 'Ola! Eu vim do Instagram Camicado e gostaria de conversar com vocês. Bora?') {\n\t\treturn \"Linktree\";\n\t}\n\n\tif(input == 'Oi, gostaria de falar sobre uma venda para empresa') {\n\t\treturn \"Empresa\";\n\t}\n\treturn \"N/A\";\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "entrypoint",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "4acc5ab0-44ae-0244-5a79-fbec3597985b",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "EntryPoint",
                "action": "{{entrypoint}}"
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "exists",
                  "values": [],
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            },
            {
              "$id": "2ae8645d-0d35-7d47-4a3a-dafc15047907",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - set entrypoint",
              "$invalid": false,
              "settings": {
                "extras": {
                  "entrypoint": "{{entrypoint}}"
                }
              },
              "conditions": [
                {
                  "values": [],
                  "source": "context",
                  "comparison": "exists",
                  "variable": "entrypoint"
                },
                {
                  "values": [
                    "N/A"
                  ],
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "entrypoint"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Sim",
            "Não"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "c6f4f2a5-e95d-4c45-b608-7c7d486ec06e",
          "root": false,
          "$title": "Nome Invalido",
          "$position": {
            "top": "632px",
            "left": "975px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "86a601d8-0a46-4a99-b4c5-f168b4902069": {
          "$contentActions": [
            {
              "action": {
                "$id": "45442bea-b068-4543-ad9d-336a503aed28",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "bfd695ce-16b7-4d48-9afe-7b5506901a83",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "bfd695ce-16b7-4d48-9afe-7b5506901a83",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "e36f1e71-b65f-4883-a306-399baa7d2bc7",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "b3f13562-9313-4c8a-bd9b-9b4cdddf53f8",
                  "type": "text/plain",
                  "content": "Certo, peço desculpas por isso. 😕\n\nVou contar sua experiência para o time e vamos trabalhar para ser cada dia melhores! ",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "b3f13562-9313-4c8a-bd9b-9b4cdddf53f8",
                    "type": "text/plain",
                    "content": "Certo, peço desculpas por isso. 😕\n\nVou contar sua experiência para o time e vamos trabalhar para ser cada dia melhores! "
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "95ac327d-8bbf-4e43-a940-8526a34fad82",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "f60d0e2d-28a6-4cf2-89a3-24e4bb583663",
              "typeOfStateId": "state",
              "$connId": "con_148",
              "$id": "35418e6f-2f48-4530-80ea-2e2408606a43",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "notExists",
                  "values": []
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "5e7a7d1f-0725-4c22-b44f-dbda5527af57",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback ruim finaliza",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "00ca99e7-b199-4fc0-b3ac-90784853052f",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}",
                  "originVertical": "{{originVertical}}",
                  "userCpfCnpj": "{{userCpfCnpj}}",
                  "userName": "{{userName}}",
                  "latitude": "{{latitude}}",
                  "longitude": "{{longitude}}",
                  "cepFormated": "{{cepFormated}}"
                },
                "category": "Feedback ruim finaliza conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "f60d0e2d-28a6-4cf2-89a3-24e4bb583663",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "86a601d8-0a46-4a99-b4c5-f168b4902069",
          "root": false,
          "$title": "Feedback ruim finaliza",
          "$position": {
            "top": "4155.43px",
            "left": "1937.57px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "00132ad9-4c49-4674-8ef4-7be8215ddead": {
          "$contentActions": [
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "79ff5759-f0fa-45d7-96e1-ab1b11c9f56f",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "9dbf18b1-4866-4d81-a4ae-e1317a0289eb",
              "typeOfStateId": "state",
              "$connId": "con_153",
              "$id": "7ed32b51-d22c-4267-9db1-d4f81c10443a",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "exists",
                  "values": [],
                  "variable": "contact.name"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "b70d2dc3-8942-4f50-9713-c081048f2a11",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "00132ad9-4c49-4674-8ef4-7be8215ddead",
          "root": false,
          "$title": "Recomeco check nome",
          "$position": {
            "top": "162px",
            "left": "399px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "52b31d32-bb47-43c7-a4c2-fc82ce681bc6": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "9372823e-933f-44b0-90a5-030d8995ba49",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "8ae1a3f8-d5ce-48c0-a4b5-e1c0d14596bd",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "52b31d32-bb47-43c7-a4c2-fc82ce681bc6",
          "root": false,
          "$title": "Validacao de promocao",
          "$position": {
            "top": "1293px",
            "left": "1893.57px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "7eb536b5-7314-4968-a2be-2384a738d940": {
          "$contentActions": [
            {
              "action": {
                "$id": "5ecb9a12-5707-4e33-8faa-af1e7289d5be",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "37b1debc-5217-47cb-8721-939bb2237d3f",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "37b1debc-5217-47cb-8721-939bb2237d3f",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "272a7609-c334-44b3-a617-b3b6d3391f1d",
                "$typeOfContent": "media",
                "type": "SendMessage",
                "settings": {
                  "id": "01b73df2-c6c3-4df5-8f60-9434962f4681",
                  "type": "application/vnd.lime.media-link+json",
                  "content": {
                    "title": "Media link title",
                    "text": "Media link subtitle",
                    "type": "image/png",
                    "uri": "https://s3-sa-east-1.amazonaws.com/msging.net/Services/Images/2e3ff2b4-a8c6-4188-bc0c-0f23531739b2",
                    "aspectRatio": "1:1"
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "01b73df2-c6c3-4df5-8f60-9434962f4681",
                    "type": "application/vnd.lime.media-link+json",
                    "content": {
                      "title": "Media link title",
                      "text": "Media link subtitle",
                      "type": "image/png",
                      "uri": "https://s3-sa-east-1.amazonaws.com/msging.net/Services/Images/2e3ff2b4-a8c6-4188-bc0c-0f23531739b2",
                      "aspectRatio": "1:1"
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "0350d1aa-14cc-4897-a52c-145ede376b3e",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "7977c317-0b6b-43be-a5ce-0885356648b5",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "7977c317-0b6b-43be-a5ce-0885356648b5",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "b38ecec7-1533-4af2-a781-44d572723584",
                "$typeOfContent": "raw-content",
                "type": "SendRawMessage",
                "settings": {
                  "metadata": {},
                  "type": "application/json",
                  "rawContent": "{\n   \"recipient_type\": \"individual\",\n   \"type\": \"interactive\",\n   \"interactive\": {\n      \"type\": \"list\",\n      \"header\": {\n         \"type\": \"text\",\n         \"text\": \"Como posso ajudar hoje?\"\n      },\n      \"body\": {\n         \"text\": \"_*Dica: envie “*voltar*” para retornar a etapa anterior.*_\\n\\nToque no botão abaixo para responder. 👇\"\n      },\n      \"action\": {\n         \"button\": \"Responder\",\n         \"sections\": [\n            {\n               \"title\": \"Escolha uma opção\",\n               \"rows\": [\n                  {\n                     \"id\": \"ID 1.1\",\n                     \"title\": \"Agendar 📅\",\n                     \"description\": \"Quero marcar um procedimento\"\n                  },\n                  {\n                     \"id\": \"ID 1.2\",\n                     \"title\": \"Reagendar ↩\",\n                     \"description\": \"Quero reagendar um procedimento\"\n                  },\n                  {\n                     \"id\": \"ID 1.3\",\n                     \"title\": \"Ver procedimentos 💉\",\n                     \"description\": \"Conhecer os procedimentos\"\n                  },\n                  {\n                     \"id\": \"ID 1.4\",\n                     \"title\": \"Valores 💰\",\n                     \"description\": \"Saber valores\"\n                  },\n                  {\n                     \"id\": \"ID 1.5\",\n                     \"title\": \"Ver promoção 🤑\",\n                     \"description\": \"Conheça a nossa promoção\"\n                  },\n                  {\n                     \"id\": \"ID 1.6\",\n                     \"title\": \"Dúvidas ❓\",\n                     \"description\": \"Tirar dúvidas sobre os procedimentos\"\n                  }\n               ]\n            }\n         ]\n      }\n   }\n}"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "24314b12-c8af-4ff5-bee6-11699d9962a9",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "46bb27d0-abd5-4ba5-9a6b-2b0e2a0ee2f4",
              "typeOfStateId": "state",
              "$connId": "con_158",
              "$id": "dd041bac-acdc-4dd0-8f1e-fde10d25e3cf",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*reagendamento.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "c5dc00fd-fb8e-4042-a916-228e7474fa7a",
              "typeOfStateId": "state",
              "$connId": "con_163",
              "$id": "a740a074-aa24-40ea-8191-37e391b80725",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*agendar.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "97bf4c32-71b2-4972-bf19-d571dc8e25c9",
              "typeOfStateId": "state",
              "$connId": "con_168",
              "$id": "211f235c-dcfd-48b7-9bd2-727a8bed9d53",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*ver.*procedimento.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "dd512617-1b23-49be-9024-3a28f9660696",
              "typeOfStateId": "state",
              "$connId": "con_173",
              "$id": "b29d1f6e-474b-47cb-a803-0458cad540e1",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*valor.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "f3667bd3-03b3-4717-87fc-ce541f8d7f16",
              "typeOfStateId": "state",
              "$connId": "con_178",
              "$id": "1afab785-5a69-477c-a8db-05d72ac6afd0",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*ver.*promo.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "310a8133-1344-4ffd-b3ac-61d4de3b6e29",
              "typeOfStateId": "state",
              "$connId": "con_183",
              "$id": "7c13e6e0-444f-485c-a0ea-0954a8fb0019",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*d[uUú]vida.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "74248358-0034-41c2-88d2-f7f4d653cfe7",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu promocao",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "b8430c98-df08-4350-96cc-e361f2dea0c8",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu promocao conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "7eb536b5-7314-4968-a2be-2384a738d940",
          "root": false,
          "$title": "Menu promocao",
          "$position": {
            "top": "1441.33px",
            "left": "1675.33px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "c5dc00fd-fb8e-4042-a916-228e7474fa7a": {
          "$contentActions": [
            {
              "action": {
                "$id": "248604d5-15c6-41dd-8324-cbed28347ea9",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "5da99786-1679-450e-87d3-ce78d966f1a6",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "5da99786-1679-450e-87d3-ce78d966f1a6",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "2d37fe4b-3f4c-45fb-9fcf-e63dd84008ba",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "e9ca0cf6-0027-46c5-875d-15501d9b9017",
                  "type": "text/plain",
                  "content": "Por aqui consigo ajudar você a fazer o seu pré-agendamento. 😁",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "e9ca0cf6-0027-46c5-875d-15501d9b9017",
                    "type": "text/plain",
                    "content": "Por aqui consigo ajudar você a fazer o seu pré-agendamento. 😁"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "06650e83-9ecf-4659-ae62-e12f43223fe4",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "539c8d79-e534-4c7e-b7e7-5c868ad7ee99",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "539c8d79-e534-4c7e-b7e7-5c868ad7ee99",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "65014340-be3c-4afe-a426-7448c0c812eb",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "1451495a-bf4d-4d2e-aeea-c73a5b3011b6",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*Você já é cliente Pró-Corpo?*\n\nSelecione uma das opções. 😉",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Sim",
                        "previewText": "Sim",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Não",
                        "previewText": "Não",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "1451495a-bf4d-4d2e-aeea-c73a5b3011b6",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*Você já é cliente Pró-Corpo?*\n\nSelecione uma das opções. 😉",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Sim",
                          "previewText": "Sim",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Não",
                          "previewText": "Não",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "c657fbda-2192-4ebd-9386-801083dd0060",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "fc5afce1-fac2-4ac9-b525-7c40e79d1be9",
              "typeOfStateId": "state",
              "$connId": "con_188",
              "$id": "915ab5bf-f875-4b0d-87d1-ccaceca289ca",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*sim.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "14807739-6fd4-478f-bde0-8a14862f85ba",
              "typeOfStateId": "state",
              "$connId": "con_193",
              "$id": "ff3f827e-8c6f-49d0-8c40-63c82c284f90",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*n[aAãÃ]o.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "2f0fbe86-6c26-44b2-be92-ef02938cb4a6",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "f296deb0-307a-4da9-a7a6-44be884c97e7",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Sim",
            "Não"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "c5dc00fd-fb8e-4042-a916-228e7474fa7a",
          "root": false,
          "$title": "Agendamento",
          "$position": {
            "top": "1934.43px",
            "left": "430px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "46bb27d0-abd5-4ba5-9a6b-2b0e2a0ee2f4": {
          "$contentActions": [
            {
              "action": {
                "$id": "d32125da-47b2-4017-97e2-fd38ed0c0cea",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "f10b1bbf-1086-4505-b773-a5a4ee9ef443",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "f10b1bbf-1086-4505-b773-a5a4ee9ef443",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "29cd8187-6661-4335-8f43-1ccc814737ea",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "b17874eb-39d0-4af0-b9ab-3b1710af348a",
                  "type": "text/plain",
                  "content": "Certo, para agilizar seu atendimento, me conta qual procedimento você quer reagendar?",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "b17874eb-39d0-4af0-b9ab-3b1710af348a",
                    "type": "text/plain",
                    "content": "Certo, para agilizar seu atendimento, me conta qual procedimento você quer reagendar?"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "6fda20c9-1b69-4d55-9199-b661d347c581",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "85441cff-1a58-45de-b36a-fda20da49c26",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Reagendamento",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "71c1b3f4-a689-4176-8c2d-b35bf58a03a9",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Reagendamento conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "69634392-9cae-4244-a169-db043996eed3",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "46bb27d0-abd5-4ba5-9a6b-2b0e2a0ee2f4",
          "root": false,
          "$title": "Reagendamento",
          "$position": {
            "top": "1868px",
            "left": "1130px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "97bf4c32-71b2-4972-bf19-d571dc8e25c9": {
          "$contentActions": [
            {
              "action": {
                "$id": "468b3f29-9f56-4c5d-a144-551508d34fcd",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "1e5bcd9d-797b-4e33-a102-398f2d843688",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "1e5bcd9d-797b-4e33-a102-398f2d843688",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "81680eeb-f7f4-4c75-8fba-07a225d38a7e",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "2a34550e-8a8d-4cde-80ba-b4574e82c43b",
                  "type": "text/plain",
                  "content": "Vou te mostrar nossos melhores procedimentos! ✨",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "2a34550e-8a8d-4cde-80ba-b4574e82c43b",
                    "type": "text/plain",
                    "content": "Vou te mostrar nossos melhores procedimentos! ✨"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "710a4f62-ec65-4378-b389-66755c41b9bc",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "d0b83d88-29fc-4684-a2b0-11240a23b4ef",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "d0b83d88-29fc-4684-a2b0-11240a23b4ef",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "6d92bfc4-45d5-49e0-adec-b59246594e04",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "94455163-853d-4e1a-89d9-63fc5fe29e0e",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*Você está pensando em fazer um procedimento facial ou corporal?*\n\nSelecione uma das opções. 😉",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Facial",
                        "previewText": "Facial",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Corporal",
                        "previewText": "Corporal",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "94455163-853d-4e1a-89d9-63fc5fe29e0e",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*Você está pensando em fazer um procedimento facial ou corporal?*\n\nSelecione uma das opções. 😉",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Facial",
                          "previewText": "Facial",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Corporal",
                          "previewText": "Corporal",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "d985847c-e6e7-4cc9-98a5-86dc3cc30219",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "60f7dfaa-a040-4c91-a1ee-e92c2c23a2b1",
              "typeOfStateId": "state",
              "$connId": "con_198",
              "$id": "eae9f9a4-058d-4826-842c-5364c319bc4e",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*facial.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "6de826f1-88e3-4d2e-aa2d-3a53ae1b4b86",
              "typeOfStateId": "state",
              "$connId": "con_203",
              "$id": "2f5c1c7d-01d0-4448-8ec0-a2ad0765bdec",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*corporal.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "088f7d9c-550c-4b98-8d0f-0aeaae03053c",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Procedimentos",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "a47bcbd5-8bc5-4098-ad71-27dc50c2eff1",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Procedimentos conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Facial",
            "Corporal"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "97bf4c32-71b2-4972-bf19-d571dc8e25c9",
          "root": false,
          "$title": "Procedimentos",
          "$position": {
            "top": "1857px",
            "left": "1621px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "dd512617-1b23-49be-9024-3a28f9660696": {
          "$contentActions": [
            {
              "action": {
                "$id": "c1401363-7998-44bc-8bf3-c5e5eebb6694",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "350673a5-f13e-43fb-b41e-d4174d7ac9a2",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "350673a5-f13e-43fb-b41e-d4174d7ac9a2",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "7144deba-aec5-4621-8fcb-eb48d759ffa1",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "4f62b8bf-ba92-4980-89c4-32cffa58f111",
                  "type": "text/plain",
                  "content": "Ok! Sobre quais procedimentos você quer saber os valores?",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "4f62b8bf-ba92-4980-89c4-32cffa58f111",
                    "type": "text/plain",
                    "content": "Ok! Sobre quais procedimentos você quer saber os valores?"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "dcbcd6a1-2295-4a1d-9ba7-de6fc9947521",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "977c07a1-e2c2-4fbf-9f69-243213751982",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Valores",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "820f514b-6ed3-45d2-819e-4a46e72fd073",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Valores conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "c1e478f2-a611-40dd-835d-c60e633ea7cd",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "dd512617-1b23-49be-9024-3a28f9660696",
          "root": false,
          "$title": "Valores",
          "$position": {
            "top": "1859.29px",
            "left": "2105.43px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "f3667bd3-03b3-4717-87fc-ce541f8d7f16": {
          "$contentActions": [
            {
              "action": {
                "$id": "00bcadcb-15cc-4dcc-8b15-b39f6bfb13a0",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "0f5d040b-a84e-4e57-bc52-6d0750c05f29",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "0f5d040b-a84e-4e57-bc52-6d0750c05f29",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "f37f3aa2-859e-4e26-86be-dda2d732ac54",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "fa4d65f5-46d8-4aff-8663-34c2379fcc18",
                  "type": "text/plain",
                  "content": "Olha só que legal!!!\n\nEstamos com uma super promoção: 1 sessão por *10X de R$ 37* sem juros.",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "fa4d65f5-46d8-4aff-8663-34c2379fcc18",
                    "type": "text/plain",
                    "content": "Olha só que legal!!!\n\nEstamos com uma super promoção: 1 sessão por *10X de R$ 37* sem juros."
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "bd696c25-d6d9-43a2-a484-2fc9bc53170f",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "fa9650e1-817d-4214-8695-abe6e9306ee1",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "fa9650e1-817d-4214-8695-abe6e9306ee1",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "d7388b58-6954-467e-a7a1-5f4c66ab06d1",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "f8a4c130-5243-4c58-9cc5-92ec39b1f4db",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "Que tal? Vamos aproveitar?",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Agendar",
                        "previewText": "Agendar",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Falar com consultora",
                        "previewText": "Falar com consultora",
                        "value": null,
                        "index": 1,
                        "type": null
                      },
                      {
                        "index": -1,
                        "text": "Agora não",
                        "previewText": "Agora não",
                        "type": null,
                        "value": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "f8a4c130-5243-4c58-9cc5-92ec39b1f4db",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "Que tal? Vamos aproveitar?",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Agendar",
                          "previewText": "Agendar",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Falar com consultora",
                          "previewText": "Falar com consultora",
                          "value": null,
                          "index": 1,
                          "type": null
                        },
                        {
                          "index": -1,
                          "text": "Agora não",
                          "previewText": "Agora não",
                          "type": null,
                          "value": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "ca70a0b3-bb6e-4636-a725-3a32d0ed9c9b",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "c5dc00fd-fb8e-4042-a916-228e7474fa7a",
              "typeOfStateId": "state",
              "$connId": "con_208",
              "$id": "dd94a8f6-a709-49f5-a842-f8c5218ab9f9",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*agendar.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1",
              "typeOfStateId": "state",
              "$connId": "con_213",
              "$id": "a77289b3-9244-4093-989b-f4222e0ee664",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*consultora.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "d557bccb-c1be-4adb-a591-2b02d1ea9415",
              "typeOfStateId": "state",
              "$connId": "con_218",
              "$id": "55c50f2d-6614-4ee2-b40c-22e49f80fc5f",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*n[aAãÃ]o.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "e08292cd-9ff8-422c-95ca-b4ab3f330007",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Promocao",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "975b7615-7efc-4609-abaf-91e9f425000f",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Promocao conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Agendar",
            "Falar com consultora",
            "Agora não"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "f3667bd3-03b3-4717-87fc-ce541f8d7f16",
          "root": false,
          "$title": "Promocao",
          "$position": {
            "top": "1872.71px",
            "left": "2479.71px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "8ae1a3f8-d5ce-48c0-a4b5-e1c0d14596bd": {
          "$contentActions": [
            {
              "action": {
                "$id": "0350d1aa-14cc-4897-a52c-145ede376b3e",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "7977c317-0b6b-43be-a5ce-0885356648b5",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "7977c317-0b6b-43be-a5ce-0885356648b5",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "b38ecec7-1533-4af2-a781-44d572723584",
                "$typeOfContent": "raw-content",
                "type": "SendRawMessage",
                "settings": {
                  "metadata": {},
                  "type": "application/json",
                  "rawContent": "{\n   \"recipient_type\": \"individual\",\n   \"type\": \"interactive\",\n   \"interactive\": {\n      \"type\": \"list\",\n      \"header\": {\n         \"type\": \"text\",\n         \"text\": \"Como posso ajudar hoje?\"\n      },\n      \"body\": {\n         \"text\": \"_*Dica: envie “*voltar*” para retornar a etapa anterior.*_\\n\\nToque no botão abaixo para responder. 👇\"\n      },\n      \"action\": {\n         \"button\": \"Responder\",\n         \"sections\": [\n            {\n               \"title\": \"Escolha uma opção\",\n               \"rows\": [\n                  {\n                     \"id\": \"ID 1.1\",\n                     \"title\": \"Agendar 📅\",\n                     \"description\": \"Quero marcar um procedimento\"\n                  },\n                  {\n                     \"id\": \"ID 1.2\",\n                     \"title\": \"Reagendar ↩\",\n                     \"description\": \"Quero reagendar um procedimento\"\n                  },\n                  {\n                     \"id\": \"ID 1.3\",\n                     \"title\": \"Ver procedimentos 💉\",\n                     \"description\": \"Conhecer os procedimentos\"\n                  },\n                  {\n                     \"id\": \"ID 1.4\",\n                     \"title\": \"Valores 💰\",\n                     \"description\": \"Saber valores\"\n                  },\n                  {\n                     \"id\": \"ID 1.6\",\n                     \"title\": \"Dúvidas ❓\",\n                     \"description\": \"Tirar dúvidas sobre os procedimentos\"\n                  }\n               ]\n            }\n         ]\n      }\n   }\n}"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "24314b12-c8af-4ff5-bee6-11699d9962a9",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "46bb27d0-abd5-4ba5-9a6b-2b0e2a0ee2f4",
              "typeOfStateId": "state",
              "$connId": "con_223",
              "$id": "dd041bac-acdc-4dd0-8f1e-fde10d25e3cf",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*reagendamento.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "c5dc00fd-fb8e-4042-a916-228e7474fa7a",
              "typeOfStateId": "state",
              "$connId": "con_228",
              "$id": "a740a074-aa24-40ea-8191-37e391b80725",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*agendar.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "97bf4c32-71b2-4972-bf19-d571dc8e25c9",
              "typeOfStateId": "state",
              "$connId": "con_233",
              "$id": "211f235c-dcfd-48b7-9bd2-727a8bed9d53",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*ver.*procedimento.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "dd512617-1b23-49be-9024-3a28f9660696",
              "typeOfStateId": "state",
              "$connId": "con_238",
              "$id": "b29d1f6e-474b-47cb-a803-0458cad540e1",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*valor.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "f3667bd3-03b3-4717-87fc-ce541f8d7f16",
              "typeOfStateId": "state",
              "$connId": "con_243",
              "$id": "1afab785-5a69-477c-a8db-05d72ac6afd0",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*ver.*promo.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "310a8133-1344-4ffd-b3ac-61d4de3b6e29",
              "typeOfStateId": "state",
              "$connId": "con_248",
              "$id": "7c13e6e0-444f-485c-a0ea-0954a8fb0019",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*d[uUú]vida.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "c26950e0-0389-41cf-8c57-1dda97a3b9d7",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu sem promocao",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "ab2d2f45-c7b6-4f4e-913d-eb25e15939ac",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu sem promocao conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "8ae1a3f8-d5ce-48c0-a4b5-e1c0d14596bd",
          "root": false,
          "$title": "Menu sem promocao",
          "$position": {
            "top": "1436.33px",
            "left": "2144.33px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "69634392-9cae-4244-a169-db043996eed3": {
          "$contentActions": [
            {
              "action": {
                "$id": "f82050c5-2672-466a-8397-72040db6c9a6",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "685bd4ec-6a83-4ece-bd5b-566cf14bfd01",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "685bd4ec-6a83-4ece-bd5b-566cf14bfd01",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "050ef8fd-0a9b-4e85-8491-8e5dd10c3128",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "b5f2b9d6-feec-4de0-9d09-0f999d480b2c",
                  "type": "text/plain",
                  "content": "Ok! Vou chamar uma das nossas especialistas para te ajudar. 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "b5f2b9d6-feec-4de0-9d09-0f999d480b2c",
                    "type": "text/plain",
                    "content": "Ok! Vou chamar uma das nossas especialistas para te ajudar. 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "aca3ba5d-d543-4cea-a112-57d39e307cec",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "b8b60dd6-c1d8-4a8a-b8af-9a46211cde99",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Reagendamento redirecionamento",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "69634392-9cae-4244-a169-db043996eed3",
          "root": false,
          "$title": "Reagendamento redirecionamento",
          "$position": {
            "top": "1993.14px",
            "left": "1138.14px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "c1e478f2-a611-40dd-835d-c60e633ea7cd": {
          "$contentActions": [
            {
              "action": {
                "$id": "363ce319-167d-4133-b103-5d5534bf4128",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "48f0185a-728d-4365-97fc-765836d94a46",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "48f0185a-728d-4365-97fc-765836d94a46",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "44e8ba80-5df2-4db6-9f65-ba950fd56829",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "a83f10b8-8480-4560-9203-34f4e5128c92",
                  "type": "text/plain",
                  "content": "Legal! Vou chamar uma das nossas especialistas para te passar os detalhes. 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "a83f10b8-8480-4560-9203-34f4e5128c92",
                    "type": "text/plain",
                    "content": "Legal! Vou chamar uma das nossas especialistas para te passar os detalhes. 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "6ae4961f-688e-415d-b984-8636ca210dbe",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "fd21799c-d28e-49ff-a674-ca7336ef3990",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Valores redireciona",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "c1e478f2-a611-40dd-835d-c60e633ea7cd",
          "root": false,
          "$title": "Valores redireciona",
          "$position": {
            "top": "2005px",
            "left": "2104.25px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "14807739-6fd4-478f-bde0-8a14862f85ba": {
          "$contentActions": [
            {
              "action": {
                "$id": "9415bd13-b45f-4eb2-bfac-1bdc65d5c406",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "c2edd53d-a31f-473e-b6a3-0cf2bab1b142",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "c2edd53d-a31f-473e-b6a3-0cf2bab1b142",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "376955ca-9916-4d25-a3f5-59734ff97d1d",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "273f14e2-ae86-4197-bfd5-c4ceae538e1f",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*Qual seria o tipo de tratamento?*\n\nSelecione uma das opções. 😉",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Tratamento Facial",
                        "previewText": "Tratamento Facial",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Tratamento Corporal",
                        "previewText": "Tratamento Corporal",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "273f14e2-ae86-4197-bfd5-c4ceae538e1f",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*Qual seria o tipo de tratamento?*\n\nSelecione uma das opções. 😉",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Tratamento Facial",
                          "previewText": "Tratamento Facial",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Tratamento Corporal",
                          "previewText": "Tratamento Corporal",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "c6164fce-60d1-4990-98d0-603224f56f46",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "4343f386-c646-4ce6-a93c-63ad01877dbd",
              "typeOfStateId": "state",
              "$connId": "con_253",
              "$id": "48ced689-952b-451f-b1f4-263e1da5d0b1",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*facial.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "d4c65edf-bf47-4917-80dd-3bba76f54cca",
              "typeOfStateId": "state",
              "$connId": "con_258",
              "$id": "70093e1e-aef1-4d1a-82bb-f84153bf3cc3",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*corporal.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "fcf533dc-09bc-4db3-88d6-4245d49dd021",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu de interesse",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "50ec01f5-d648-4c16-af83-e205ab281613",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu de interesse conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Tratamento Facial",
            "Tratamento Corporal"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "14807739-6fd4-478f-bde0-8a14862f85ba",
          "root": false,
          "$title": "Menu de interesse",
          "$position": {
            "top": "2079px",
            "left": "598px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "fc5afce1-fac2-4ac9-b525-7c40e79d1be9": {
          "$contentActions": [
            {
              "action": {
                "$id": "47a28485-18e3-4c76-990d-13cbd1570a43",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "1cd71ed4-5a0d-4782-8449-1d43c0e002a7",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "1cd71ed4-5a0d-4782-8449-1d43c0e002a7",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "8a3bbfc8-85f5-4b9a-b083-fa890fdc82ef",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "e33934f8-a05c-4a84-a3e9-ac6950aac4e0",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*O que vamos agendar?*\n\nSelecione uma das opções!",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Nova Avaliação",
                        "previewText": "Nova Avaliação",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Próxima Sessão",
                        "previewText": "Próxima Sessão",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "e33934f8-a05c-4a84-a3e9-ac6950aac4e0",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*O que vamos agendar?*\n\nSelecione uma das opções!",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Nova Avaliação",
                          "previewText": "Nova Avaliação",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Próxima Sessão",
                          "previewText": "Próxima Sessão",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "0d0e7525-3bf1-44e0-8c93-d3ff473a5c9b",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "ca990a14-1a0e-49ec-92bf-9f23f1fd48f4",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu de agendamento",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "a5e9bf45-c6aa-407f-b01b-302bac0afe89",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu de agendamento conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Nova Avaliação",
            "Próxima Sessão"
          ],
          "$defaultOutput": {
            "stateId": "14807739-6fd4-478f-bde0-8a14862f85ba",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "fc5afce1-fac2-4ac9-b525-7c40e79d1be9",
          "root": false,
          "$title": "Menu de agendamento",
          "$position": {
            "top": "2075px",
            "left": "203px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "d4c65edf-bf47-4917-80dd-3bba76f54cca": {
          "$contentActions": [
            {
              "action": {
                "$id": "69500a57-9902-44ad-85ca-56ecf7eced38",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "d96d3400-c7bb-4732-a51e-babaec4e0597",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "d96d3400-c7bb-4732-a51e-babaec4e0597",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "8777cd07-effe-4282-a53c-f39d96e8887d",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "93b25bd6-a72b-4395-b11d-57d1ea22e503",
                  "type": "text/plain",
                  "content": "Legal! 🤩",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "93b25bd6-a72b-4395-b11d-57d1ea22e503",
                    "type": "text/plain",
                    "content": "Legal! 🤩"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "60a9d598-4123-47f5-afb6-bef993e08117",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "9ff3ee51-96a2-42dc-a033-971395e88afc",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "9ff3ee51-96a2-42dc-a033-971395e88afc",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "a3ef217a-8612-4452-b208-681cc85ac9a2",
                "$typeOfContent": "select",
                "type": "SendMessage",
                "settings": {
                  "id": "48157123-fa3f-4d4c-9cf8-28924bf5c386",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*E qual é o tratamento corporal?*\nToque no botão para selecionar um tratamento. 👇",
                    "options": [
                      {
                        "text": "Gordura localizada",
                        "previewText": "Gordura localizada",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Flacidez",
                        "previewText": "Flacidez",
                        "value": null,
                        "index": 1,
                        "type": null
                      },
                      {
                        "text": "Vasinhos",
                        "previewText": "Vasinhos",
                        "value": null,
                        "index": 2,
                        "type": null
                      },
                      {
                        "index": -1,
                        "text": "Estrias",
                        "previewText": "Estrias",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Celulite",
                        "previewText": "Celulite",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Enzimas",
                        "previewText": "Enzimas",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Massagem",
                        "previewText": "Massagem",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Outro ",
                        "previewText": "Outro ",
                        "type": null,
                        "value": null
                      }
                    ],
                    "limitMenu": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "48157123-fa3f-4d4c-9cf8-28924bf5c386",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*E qual é o tratamento corporal?*\nToque no botão para selecionar um tratamento. 👇",
                      "options": [
                        {
                          "text": "Gordura localizada",
                          "previewText": "Gordura localizada",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Flacidez",
                          "previewText": "Flacidez",
                          "value": null,
                          "index": 1,
                          "type": null
                        },
                        {
                          "text": "Vasinhos",
                          "previewText": "Vasinhos",
                          "value": null,
                          "index": 2,
                          "type": null
                        },
                        {
                          "index": -1,
                          "text": "Estrias",
                          "previewText": "Estrias",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Celulite",
                          "previewText": "Celulite",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Enzimas",
                          "previewText": "Enzimas",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Massagem",
                          "previewText": "Massagem",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Outro ",
                          "previewText": "Outro ",
                          "type": null,
                          "value": null
                        }
                      ],
                      "limitMenu": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "bfac722c-7285-48fb-bcbe-b1177205520d",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "e787e3a8-158e-4a39-a1b4-17db8600037d",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Tratamento Corporal",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "088008ce-72ec-4da7-98d4-2df144452d43",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Tratamento Corporal conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Gordura localizada",
            "Flacidez",
            "Vasinhos",
            "Estrias",
            "Celulite",
            "Enzimas",
            "Massagem",
            "Outro "
          ],
          "$defaultOutput": {
            "stateId": "ec78e6ad-aa2f-4736-8282-48b4155bd417",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "d4c65edf-bf47-4917-80dd-3bba76f54cca",
          "root": false,
          "$title": "Tratamento Corporal",
          "$position": {
            "top": "2256.25px",
            "left": "757px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "4343f386-c646-4ce6-a93c-63ad01877dbd": {
          "$contentActions": [
            {
              "action": {
                "$id": "b5bb8a2f-afc0-4578-8fa1-745d36971085",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "7787eea7-1853-4fef-a88b-608ba74b1359",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "7787eea7-1853-4fef-a88b-608ba74b1359",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "e2183065-93f9-4521-adda-35f5208b24a5",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "afc9f825-545d-46cd-bede-2ffd3581226b",
                  "type": "text/plain",
                  "content": "Legal! 🤩",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "afc9f825-545d-46cd-bede-2ffd3581226b",
                    "type": "text/plain",
                    "content": "Legal! 🤩"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "65044bed-7f02-4b08-a211-85ea4845c364",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "d115fecf-18e9-403f-ab88-6d4f55646159",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "d115fecf-18e9-403f-ab88-6d4f55646159",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "dbdcd08e-b6a0-47b8-99c4-b71e99072c73",
                "$typeOfContent": "raw-content",
                "type": "SendRawMessage",
                "settings": {
                  "metadata": {},
                  "type": "application/json",
                  "rawContent": "{\n   \"recipient_type\": \"individual\",\n   \"type\": \"interactive\",\n   \"interactive\": {\n      \"type\": \"list\",\n      \"header\": {\n         \"type\": \"text\",\n         \"text\": \"E qual é o tratamento facial?\"\n      },\n      \"body\": {\n         \"text\": \"Toque no botão para selecionar um tratamento. 👇\"\n      },\n      \"action\": {\n         \"button\": \"Selecionar opção\",\n         \"sections\": [\n            {\n               \"title\": \"Escolha uma opção\",\n               \"rows\": [\n                  {\n                     \"id\": \"ID 1.1\",\n                     \"title\": \"Harmonização Facial\"\n                  },\n                  {\n                     \"id\": \"ID 1.2\",\n                     \"title\": \"Botox\"\n                  },\n                  {\n                     \"id\": \"ID 1.3\",\n                     \"title\": \"Rugas\",\n                     \"description\": \"Rugas e linhas de expressão\"\n                  },\n                  {\n                     \"id\": \"ID 1.4\",\n                     \"title\": \"Manchas e Marcas\",\n                     \"description\": \"Manchas e marcas de acne\"\n                  },\n                  {\n                     \"id\": \"ID 1.5\",\n                     \"title\": \"Olheiras\"\n                  },\n                  {\n                     \"id\": \"ID 1.6\",\n                     \"title\": \"Limpeza de pele\"\n                  },\n                  {\n                     \"id\": \"ID 1.7\",\n                     \"title\": \"Flacidez facial\"\n                  },\n                  {\n                     \"id\": \"ID 1.8\",\n                     \"title\": \"Outro\"\n                  }\n               ]\n            }\n         ]\n      }\n   }\n}"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "adec7f65-3679-4fc6-80fe-1dbe3529d916",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "1ea52373-84e4-4164-8870-a42de620c0d3",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Tratamento Facial",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "4dea29fc-f761-403d-8ef0-6d225f4b1cc1",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Tratamento Facial conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "ec78e6ad-aa2f-4736-8282-48b4155bd417",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "4343f386-c646-4ce6-a93c-63ad01877dbd",
          "root": false,
          "$title": "Tratamento Facial",
          "$position": {
            "top": "2250px",
            "left": "475px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "ec78e6ad-aa2f-4736-8282-48b4155bd417": {
          "$contentActions": [
            {
              "action": {
                "$id": "69996bd3-a795-4fce-bf51-9ab51688947c",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "cd8022ab-2d61-4db9-9368-6b292d3ee60e",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "cd8022ab-2d61-4db9-9368-6b292d3ee60e",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "65e1395c-47bb-45c9-836d-eda1b39c2133",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "14b4e171-3bbb-4aa3-b21b-91ace01c5fa8",
                  "type": "text/plain",
                  "content": "Agora, preciso do seu *e-mail*, para contato\n\n👉 _Exemplo: isa@email.com_",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "14b4e171-3bbb-4aa3-b21b-91ace01c5fa8",
                    "type": "text/plain",
                    "content": "Agora, preciso do seu *e-mail*, para contato\n\n👉 _Exemplo: isa@email.com_"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "edc5cc17-a56a-49e3-88c5-3e70bd4e455d",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "87363f68-b14a-4b5b-b34c-d9c54585c113",
              "typeOfStateId": "state",
              "$connId": "con_263",
              "$id": "359fb273-3eae-4ed4-a652-c33ff43ea496",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "Sem interacao",
                    "email invalido"
                  ],
                  "variable": "userEmail"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "83f47924-b22a-4ec1-b3f2-c2d50e9fc161",
              "typeOfStateId": "state",
              "$connId": "con_268",
              "$id": "da256949-cd29-4eb9-a5d6-d78eb15b7202",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "true"
                  ],
                  "variable": "toCorrect"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "7f468df6-e5b5-4dd1-9f57-d0777bd2f3a7",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento colhe email",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "8932daef-edf7-43bb-9834-7fccd5d5f031",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento colhe email conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            },
            {
              "$id": "9d0042ff-1f2b-4980-9ec6-ee3c79f83c6f",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - check email",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "function run(inputContent) {\n    if (!inputContent) {\n        return 'Sem interacao';\n    }\n\n    try {\n\n        let input = inputContent.trim();\n        let regex = /^(([aA-zZ\\\\0-9\\\\d\\\\w\\\\.\\\\-]+)([@])([\\\\daA-zZ]+)([\\\\.])([aA-zZ]+)(([\\\\.])([aA-zZ])+)*)$/;\n\n        let res = input.match(regex);\n\n        if (res) {\n            if (res.groups) {\n                return res.groups.email;\n            } else if (res.length > 0) {\n                return res[0];\n            }\n        }\n    } catch (err) {\n    }\n\n    return 'email invalido';\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "userEmail",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "bd6701fc-1338-46e8-b0c4-fcd4def1cf69",
              "$typeOfContent": "",
              "type": "MergeContact",
              "$title": "Definir contato - save email",
              "$invalid": false,
              "settings": {
                "extras": {},
                "email": "{{userEmail}}"
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "userEmail",
                  "values": [
                    "Sem interacao",
                    "email invalido"
                  ]
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "470f2528-4cf1-4c6d-b9f2-c93617775f44",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "ec78e6ad-aa2f-4736-8282-48b4155bd417",
          "root": false,
          "$title": "Agendamento colhe email",
          "$position": {
            "top": "2430px",
            "left": "608.75px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "87363f68-b14a-4b5b-b34c-d9c54585c113": {
          "$contentActions": [
            {
              "action": {
                "$id": "40c14810-e414-40d8-ac31-dd7ae29c0ce3",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "a3ec078a-eab2-4276-9a2e-3689bf8ff670",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "a3ec078a-eab2-4276-9a2e-3689bf8ff670",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "b87c29cb-ee74-46d7-bc9c-25a3e9c79a13",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "f745a200-838b-41e4-b38b-8d5a3fa9ab0d",
                  "type": "text/plain",
                  "content": "Hmm... o *e-mail* informado não parece correto. 🤔\n\nVamos tentar outra vez! 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "f745a200-838b-41e4-b38b-8d5a3fa9ab0d",
                    "type": "text/plain",
                    "content": "Hmm... o *e-mail* informado não parece correto. 🤔\n\nVamos tentar outra vez! 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "655d2e30-189f-4ce6-95c9-9168053d3184",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "859b0bdb-5381-454c-ac51-ca066f613ad5",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento email invalido",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "ec78e6ad-aa2f-4736-8282-48b4155bd417",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "87363f68-b14a-4b5b-b34c-d9c54585c113",
          "root": false,
          "$title": "Agendamento email invalido",
          "$position": {
            "top": "2436.5px",
            "left": "827.75px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "470f2528-4cf1-4c6d-b9f2-c93617775f44": {
          "$contentActions": [
            {
              "action": {
                "$id": "665b3080-a7ee-4ea4-94ba-fcbfea79da8a",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "805e5e03-b141-45bf-a477-928bab35451a",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "805e5e03-b141-45bf-a477-928bab35451a",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "7740cab0-1d8c-42e8-a454-d81afdc88946",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "e71ffeee-e3b3-4ea1-9f8e-7285c24bfdd2",
                  "type": "text/plain",
                  "content": "Nosso horário de atendimento é : \n\n📅 Segunda à Sexta: *8:30 as 20:30*\n\n📅 Sábado: *8:30 as 15:00*\n\nQual seria a melhor data para agendar seu procedimento? \n\n👉_Exemplo: 01/07_",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "e71ffeee-e3b3-4ea1-9f8e-7285c24bfdd2",
                    "type": "text/plain",
                    "content": "Nosso horário de atendimento é : \n\n📅 Segunda à Sexta: *8:30 as 20:30*\n\n📅 Sábado: *8:30 as 15:00*\n\nQual seria a melhor data para agendar seu procedimento? \n\n👉_Exemplo: 01/07_"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "113309ee-49fb-43a7-914f-d5c0ecb6f126",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "date"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false,
                "variable": "date"
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "deb9d44f-9a7a-4630-a3c0-4c2e034dfa5f",
              "typeOfStateId": "state",
              "$connId": "con_273",
              "$id": "4e2c63d1-7adc-4a36-ab7b-0bb0ee94ee34",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "true"
                  ],
                  "variable": "dateHasPassed"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "83f47924-b22a-4ec1-b3f2-c2d50e9fc161",
              "typeOfStateId": "state",
              "$connId": "con_278",
              "$id": "32ffd886-4b80-4090-8cac-01af1b388e04",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "true"
                  ],
                  "variable": "toCorrect"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "26e07059-f219-4ffa-8b25-2e87ae2220bd",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento data",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "f5443a5a-e090-4c6e-aa4d-a426a58c8e20",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento data conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            },
            {
              "$id": "f7c518d9-4dbe-429d-b338-11eaa611b660",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script -  validate if date has passed",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(userDate) {\n  try {\n\n    // Obtenha a data atual\n    const currentDate = new Date();\n\n    // Converta a data fornecida pelo usuário para o formato \"dd/MM\"\n    const [userDay, userMonth] = userDate.split('/').map(Number);\n    const userYear = currentDate.getFullYear(); // Use o ano atual\n\n    // Crie um objeto Date com a data fornecida pelo usuário\n    const userSelectedDate = new Date(userYear, userMonth - 1, userDay);\n\n    // Compare as duas datas\n    if (userSelectedDate < currentDate) {\n      return true; // A data fornecida já passou\n    } else {\n      return false; // A data fornecida ainda não passou\n    }\n\n  } catch (e) {\n    return true\n  }\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "dateHasPassed",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "315cdf48-6354-48bf-913b-caa37deb2929",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "470f2528-4cf1-4c6d-b9f2-c93617775f44",
          "root": false,
          "$title": "Agendamento data",
          "$position": {
            "top": "2621.67px",
            "left": "604px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "315cdf48-6354-48bf-913b-caa37deb2929": {
          "$contentActions": [
            {
              "action": {
                "$id": "3c7bc7aa-e7ee-452b-babd-4192a2f7cff9",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "55dae763-e510-4843-8308-0ce7558ae96c",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "55dae763-e510-4843-8308-0ce7558ae96c",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "8cdb1759-c57c-44a5-a50b-a2cc8830698c",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "fd4b1456-3eb4-4908-b799-1cffff55cc95",
                  "type": "text/plain",
                  "content": "E qual seria o melhor horário para agendar seu procedimento? \n\n👉_Exemplo: 14:30_",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "fd4b1456-3eb4-4908-b799-1cffff55cc95",
                    "type": "text/plain",
                    "content": "E qual seria o melhor horário para agendar seu procedimento? \n\n👉_Exemplo: 14:30_"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "b1f3f8fe-462d-4348-9853-1a1e467c777e",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "hour"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false,
                "variable": "hour"
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "a3d079cf-3a2e-4c36-8acc-7860c6de0b94",
              "typeOfStateId": "state",
              "$connId": "con_283",
              "$id": "17ed8b2a-d9e8-461c-aa0f-aec2577158d0",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "false"
                  ],
                  "variable": "outHours"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "83f47924-b22a-4ec1-b3f2-c2d50e9fc161",
              "typeOfStateId": "state",
              "$connId": "con_288",
              "$id": "0e01fd63-c287-4964-b74b-09696b148fd8",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "true"
                  ],
                  "variable": "toCorrect"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "5be3e6de-708c-4835-a566-0f393164bbca",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento horario",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "c60230f0-7950-4146-b8af-ae38eb6df962",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento horario conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            },
            {
              "$id": "f3edfc7b-180e-42c8-8663-cafaf90c60d0",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get time",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "function run(startDateMonday, endDateMonday, startDateTuesday, endDateTuesday, startDateWednesday, endDateWednesday, startDateThursday, endDateThursday, startDateFriday, endDateFriday, startDateSaturday, endDateSaturday, userTime, userDate) {\n  try {\n   // Obtenha a data atual\n\n    const currentDate = nowUTC(-3);\n\n    // Converta a data fornecida pelo usuário para o formato \"dd/MM\"\n    const [userDay, userMonth] = userDate.split('/').map(Number);\n    const userYear = currentDate.getFullYear(); // Use o ano atual\n\n    // Crie um objeto Date com a data fornecida pelo usuário\n    const userSelectedDate = new Date(userYear, userMonth - 1, userDay);\n\n    // Separe o horário digitado pelo usuário em horas e minutos\n    const [userHour, userMinute] = userTime.split(':').map(Number);\n\n    // Defina os horários de funcionamento para cada dia da semana\n    const workingHours = {\n      1: { // Segunda-feira (código 1)\n        start: { hour: Number(startDateMonday.split(':')[0]), minute: Number(startDateMonday.split(':')[1]) },\n        end: { hour: Number(endDateMonday.split(':')[0]), minute: Number(endDateMonday.split(':')[1]) }\n      },\n      2: { // Terça-feira (código 2)\n        start: { hour: Number(startDateTuesday.split(':')[0]), minute: Number(startDateTuesday.split(':')[1]) },\n        end: { hour: Number(endDateTuesday.split(':')[0]), minute: Number(endDateTuesday.split(':')[1]) }\n      },\n      3: { // Quarta-feira (código 3)\n        start: { hour: Number(startDateWednesday.split(':')[0]), minute: Number(startDateWednesday.split(':')[1]) },\n        end: { hour: Number(endDateWednesday.split(':')[0]), minute: Number(endDateWednesday.split(':')[1]) }\n      },\n      4: { // Quinta-feira (código 4)\n        start: { hour: Number(startDateThursday.split(':')[0]), minute: Number(startDateThursday.split(':')[1]) },\n        end: { hour: Number(endDateThursday.split(':')[0]), minute: Number(endDateThursday.split(':')[1]) }\n      },\n      5: { // Sexta-feira (código 5)\n        start: { hour: Number(startDateFriday.split(':')[0]), minute: Number(startDateFriday.split(':')[1]) },\n        end: { hour: Number(endDateFriday.split(':')[0]), minute: Number(endDateFriday.split(':')[1]) }\n      },\n      6: { // Sábado (código 6)\n        start: { hour: Number(startDateSaturday.split(':')[0]), minute: Number(startDateSaturday.split(':')[1]) },\n        end: { hour: Number(endDateSaturday.split(':')[0]), minute: Number(endDateSaturday.split(':')[1]) }\n      },\n    };\n\n    // Verifique se o horário fornecido pelo usuário está dentro do horário de funcionamento para o dia selecionado\n    const selectedDayOfWeek = userSelectedDate.getDay(); // 0 (domingo) a 6 (sábado)\n\n    if (selectedDayOfWeek === 0 || selectedDayOfWeek === 6) {\n      // Se for domingo ou sábado, verifique o horário de funcionamento de sábado\n      if (userHour >= workingHours[6].start.hour && userHour <= workingHours[6].end.hour) {\n        return true;\n      }\n    } else {\n      // Para dias de semana (segunda a sexta), verifique o horário de funcionamento correspondente\n      if (userHour >= workingHours[selectedDayOfWeek].start.hour && userHour <= workingHours[selectedDayOfWeek].end.hour) {\n        return true;\n      }\n    }\n\n    return false; // O horário está fora do horário de funcionamento\n  } catch (e) { }\n\n\n}\n\n\nfunction nowUTC(offset) {\n  let now = new Date;\n  let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),\n    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());\n\n  return new Date(utc_timestamp + offset * 3600 * 1000);\n}\n",
                "inputVariables": [
                  "config.startDateMonday",
                  "config.endDateMonday",
                  "config.startDateTuesday",
                  "config.endDateTuesday",
                  "config.startDateWednesday",
                  "config.endDateWednesday",
                  "config.startDateThursday",
                  "config.endDateThursday",
                  "config.startDateFriday",
                  "config.endDateFriday",
                  "config.startDateSaturday",
                  "config.endDateSaturday",
                  "hour",
                  "date"
                ],
                "outputVariable": "outHours",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "62e4cbfa-83b1-4ead-b4b6-498561123481",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "315cdf48-6354-48bf-913b-caa37deb2929",
          "root": false,
          "$title": "Agendamento horario",
          "$position": {
            "top": "2794px",
            "left": "604.667px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "62e4cbfa-83b1-4ead-b4b6-498561123481": {
          "$contentActions": [
            {
              "action": {
                "$id": "020f349a-4f9e-4e65-8815-20718ecfe242",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "ff9154e2-edd6-4821-aba1-c48b29ff8c15",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "ff9154e2-edd6-4821-aba1-c48b29ff8c15",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "c09e14cb-4cce-41b4-b926-f0b98a830869",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "dc64fe36-19a4-443d-a04b-da1e4233ade8",
                  "type": "text/plain",
                  "content": "Certo! Agora só falta decidirmos a loja. 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "dc64fe36-19a4-443d-a04b-da1e4233ade8",
                    "type": "text/plain",
                    "content": "Certo! Agora só falta decidirmos a loja. 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "ae75df79-cc0d-4f1c-a1b2-052f1ad09c5b",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "da1b7da7-5391-4a5e-9887-ce46cb4c74ae",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "da1b7da7-5391-4a5e-9887-ce46cb4c74ae",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "72700088-8be0-44cc-8aa6-57c6e063f2ab",
                "$typeOfContent": "raw-content",
                "type": "SendRawMessage",
                "settings": {
                  "metadata": {},
                  "type": "application/json",
                  "rawContent": "{\n   \"recipient_type\": \"individual\",\n   \"type\": \"interactive\",\n   \"interactive\": {\n      \"type\": \"list\",\n      \"header\": {\n         \"type\": \"text\",\n         \"text\": \"Conta pra mim, qual é a sua região?\"\n      },\n      \"body\": {\n         \"text\": \"Toque no botão abaixo para responder. 👇\"\n      },\n      \"action\": {\n         \"button\": \"Responder\",\n         \"sections\": [\n            {\n               \"title\": \"Em SP\",\n               \"rows\": [\n                  {\n                     \"id\": \"ID 1.1\",\n                     \"title\": \"Capital\"\n                  },\n                  {\n                     \"id\": \"ID 1.2\",\n                     \"title\": \"Litoral e Interior\"\n                  }\n               ]\n            },\n            {\n               \"title\": \"Demais Regiões\",\n               \"rows\": [\n                  {\n                     \"id\": \"ID 1.3\",\n                     \"title\": \"Rio de Janeiro\"\n                  },\n                  {\n                     \"id\": \"ID 1.4\",\n                     \"title\": \"Belo Horizonte\"\n                  },\n                  {\n                     \"id\": \"ID 1.5\",\n                     \"title\": \"Londrina\"\n                  }\n               ]\n            }\n         ]\n      }\n   }\n}"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "65c9580d-8602-4b3d-956d-47376f48785e",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "4abbcce7-c1b6-44db-936a-7ea06f49659d",
              "typeOfStateId": "state",
              "$connId": "con_293",
              "$id": "bcd5c05e-f75b-4060-82dc-1f20b525969c",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*litoral.*)",
                    "(?i)(.*interior.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "88a83ada-85cd-43f4-9bcd-dc9456a099ad",
              "typeOfStateId": "state",
              "$connId": "con_298",
              "$id": "e9b591bb-73f0-4c0e-87fd-c1a2e147342a",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*rio.*de.*janeiro.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "83f47924-b22a-4ec1-b3f2-c2d50e9fc161",
              "typeOfStateId": "state",
              "$connId": "con_303",
              "$id": "f5f9f4a0-a795-46f1-8255-7e4fbd7ad24f",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*belo.*horizonte.*)",
                    "(?i)(.*londrina.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "5fd52118-10d2-467b-84a2-c711d5cfc6d4",
              "typeOfStateId": "state",
              "$connId": "con_308",
              "$id": "aa6ff625-4156-4a8e-a9cd-1573321c3972",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*capital.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "fc308577-e90b-42d4-8155-6d89c91b7a43",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento loja",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "6fb68c74-2ca9-4a90-9d7f-52a2121bdfd8",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento loja conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            },
            {
              "$id": "12f0b079-41fc-4afc-a09c-005b4812134a",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável - set unit bh",
              "$invalid": false,
              "settings": {
                "variable": "unit",
                "value": "Belo Horizonte"
              },
              "conditions": [
                {
                  "values": [
                    "(?i)(.*belo.*horizonte.*)"
                  ],
                  "source": "input",
                  "comparison": "matches"
                }
              ]
            },
            {
              "$id": "d00ed77b-6541-4cc1-8add-df595725076d",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável - set unit londrina",
              "$invalid": false,
              "settings": {
                "variable": "unit",
                "value": "Londrina"
              },
              "conditions": [
                {
                  "values": [
                    "(?i)(.*londrina.*)"
                  ],
                  "source": "input",
                  "comparison": "matches"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "62e4cbfa-83b1-4ead-b4b6-498561123481",
          "root": false,
          "$title": "Agendamento loja",
          "$position": {
            "top": "2963px",
            "left": "605px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "4abbcce7-c1b6-44db-936a-7ea06f49659d": {
          "$contentActions": [
            {
              "action": {
                "$id": "df12c974-ff68-426a-94c7-3a0bcdde4957",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "0ed75e52-4534-4687-a6bd-1b5bb0911362",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "0ed75e52-4534-4687-a6bd-1b5bb0911362",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "56cd463d-2b3a-4807-858f-0f339a6f857e",
                "$typeOfContent": "select",
                "type": "SendMessage",
                "settings": {
                  "id": "739d1e6a-2198-4773-91b2-79cbdad63090",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*Legal!* 🙋‍♀️ \n\n*Qual seria a unidade do Litoral ou Interior?*\n\nToque no botão para escolher a unidade. 👇",
                    "options": [
                      {
                        "text": "Santos",
                        "previewText": "Santos",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Campinas",
                        "previewText": "Campinas",
                        "value": null,
                        "index": 1,
                        "type": null
                      },
                      {
                        "text": "Sorocaba",
                        "previewText": "Sorocaba",
                        "value": null,
                        "index": 2,
                        "type": null
                      },
                      {
                        "index": -1,
                        "text": "Piracicaba",
                        "previewText": "Piracicaba",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Ribeirão Preto",
                        "previewText": "Ribeirão Preto",
                        "type": null,
                        "value": null
                      }
                    ],
                    "limitMenu": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "739d1e6a-2198-4773-91b2-79cbdad63090",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*Legal!* 🙋‍♀️ \n\n*Qual seria a unidade do Litoral ou Interior?*\n\nToque no botão para escolher a unidade. 👇",
                      "options": [
                        {
                          "text": "Santos",
                          "previewText": "Santos",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Campinas",
                          "previewText": "Campinas",
                          "value": null,
                          "index": 1,
                          "type": null
                        },
                        {
                          "text": "Sorocaba",
                          "previewText": "Sorocaba",
                          "value": null,
                          "index": 2,
                          "type": null
                        },
                        {
                          "index": -1,
                          "text": "Piracicaba",
                          "previewText": "Piracicaba",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Ribeirão Preto",
                          "previewText": "Ribeirão Preto",
                          "type": null,
                          "value": null
                        }
                      ],
                      "limitMenu": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "fb52e5f2-b951-4cb9-b59d-78c43f55324a",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "unit"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false,
                "variable": "unit"
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "63614fbf-490e-46e1-9ec5-77504bfc308f",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Litoral e Interior",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "f1644f6f-1244-4a6f-bd3b-ad3de54c5755",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Litoral e Interior conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Santos",
            "Campinas",
            "Sorocaba",
            "Piracicaba",
            "Ribeirão Preto"
          ],
          "$defaultOutput": {
            "stateId": "83f47924-b22a-4ec1-b3f2-c2d50e9fc161",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "4abbcce7-c1b6-44db-936a-7ea06f49659d",
          "root": false,
          "$title": "Litoral e Interior",
          "$position": {
            "top": "3138px",
            "left": "490px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "83f47924-b22a-4ec1-b3f2-c2d50e9fc161": {
          "$contentActions": [
            {
              "action": {
                "$id": "7ee07844-bc4f-47a3-98e2-da1b433ad9ba",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "8a9c4adc-7192-4596-bea6-34d4d4b5910a",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "8a9c4adc-7192-4596-bea6-34d4d4b5910a",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "8c47afd3-c8c7-4d13-9262-0cef32723acf",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "ce00c4d5-a2cb-4b01-aa2b-2c169d845ba3",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*Uhul*, terminamos seu pré-agendamento! ✨ \n\nAgora, confirme se suas informações estão corretas:\n\n*{{menuPrincipal}} - {{procedimento}}*\n\n➡ *E-mail:* {{contact.email}}\n\n➡ *Data:* {{date}}\n\n➡ *Horário:* {{hour}}\n\n➡ *Unidade:* {{unit}}\n\nAs informações estão corretas?",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Confirmar",
                        "previewText": "Confirmar",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Corrigir",
                        "previewText": "Corrigir",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "ce00c4d5-a2cb-4b01-aa2b-2c169d845ba3",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*Uhul*, terminamos seu pré-agendamento! ✨ \n\nAgora, confirme se suas informações estão corretas:\n\n*{{menuPrincipal}} - {{procedimento}}*\n\n➡ *E-mail:* {{contact.email}}\n\n➡ *Data:* {{date}}\n\n➡ *Horário:* {{hour}}\n\n➡ *Unidade:* {{unit}}\n\nAs informações estão corretas?",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Confirmar",
                          "previewText": "Confirmar",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Corrigir",
                          "previewText": "Corrigir",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "18476184-97ec-43b0-80dc-3d88876e9c38",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "0824f6eb-8e4e-427d-a8e3-21d7d1d15319",
              "typeOfStateId": "state",
              "$connId": "con_313",
              "$id": "3458998c-b2c4-49e3-a7fd-878bfa506f6b",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*confirmar.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "76977838-1302-449c-aa52-8270ac26eb6a",
              "typeOfStateId": "state",
              "$connId": "con_318",
              "$id": "faab5846-372a-4869-b40d-0131eb8993dd",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*corrigir.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "ee067f82-aa09-4f88-84ba-0a2560c8b133",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Belo Horizonte  Londrina",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "22840231-1f58-47d8-89a1-366620153a4e",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Belo Horizonte  Londrina conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Confirmar",
            "Corrigir"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "83f47924-b22a-4ec1-b3f2-c2d50e9fc161",
          "root": false,
          "$title": "Agendamento confirma dados",
          "$position": {
            "top": "3249.25px",
            "left": "1013px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "88a83ada-85cd-43f4-9bcd-dc9456a099ad": {
          "$contentActions": [
            {
              "action": {
                "$id": "f1f8ec7f-983b-45ee-8625-329755edae69",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "c7ae5c60-e795-42cf-a5fd-0bf1f5a98d58",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "c7ae5c60-e795-42cf-a5fd-0bf1f5a98d58",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "83cb1671-345f-4e44-9fba-41eb48cd0163",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "890d2b4e-e049-42a0-b294-7a41dfab3bd3",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "Legal!!! 🙋‍♀️\n\nQual seria a unidade da *Cidade Maravilhosa*?",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Barra da Tijuca",
                        "previewText": "Barra da Tijuca",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Copacabana",
                        "previewText": "Copacabana",
                        "value": null,
                        "index": 1,
                        "type": null
                      },
                      {
                        "index": -1,
                        "text": "Tijuca",
                        "previewText": "Tijuca",
                        "type": null,
                        "value": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "890d2b4e-e049-42a0-b294-7a41dfab3bd3",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "Legal!!! 🙋‍♀️\n\nQual seria a unidade da *Cidade Maravilhosa*?",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Barra da Tijuca",
                          "previewText": "Barra da Tijuca",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Copacabana",
                          "previewText": "Copacabana",
                          "value": null,
                          "index": 1,
                          "type": null
                        },
                        {
                          "index": -1,
                          "text": "Tijuca",
                          "previewText": "Tijuca",
                          "type": null,
                          "value": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "76b9a9af-5434-4397-b655-c12ae59b06df",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "unit"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false,
                "variable": "unit"
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "e96de465-602e-4591-9db0-fdcf2c3b8f81",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Rio de Janeiro",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "7f7bff0a-ae80-48ee-b92e-d20db961aec5",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Rio de Janeiro conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Barra da Tijuca",
            "Copacabana",
            "Tijuca"
          ],
          "$defaultOutput": {
            "stateId": "83f47924-b22a-4ec1-b3f2-c2d50e9fc161",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "88a83ada-85cd-43f4-9bcd-dc9456a099ad",
          "root": false,
          "$title": "Rio de Janeiro",
          "$position": {
            "top": "3138px",
            "left": "767px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "76977838-1302-449c-aa52-8270ac26eb6a": {
          "$contentActions": [
            {
              "action": {
                "$id": "857dc757-6be7-4704-a474-5e5456da29cf",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "677fdadb-1dab-40ca-ae4e-8c798fcec613",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "677fdadb-1dab-40ca-ae4e-8c798fcec613",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "a3f3f5ee-6db3-4cb9-a278-878b2610ab13",
                "$typeOfContent": "select",
                "type": "SendMessage",
                "settings": {
                  "id": "62b39218-1daf-4706-b11d-06a7740a0b4f",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*Tudo bem! Vou te ajudar a corrigir.* 😊\n\nToque no botão para escolher a informação que precisa corrigir. 👇",
                    "options": [
                      {
                        "text": "E-mail",
                        "previewText": "E-mail",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Data",
                        "previewText": "Data",
                        "value": null,
                        "index": 1,
                        "type": null
                      },
                      {
                        "text": "Horário",
                        "previewText": "Horário",
                        "value": null,
                        "index": 2,
                        "type": null
                      },
                      {
                        "index": -1,
                        "text": "Unidade",
                        "previewText": "Unidade",
                        "type": null,
                        "value": null
                      }
                    ],
                    "limitMenu": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "62b39218-1daf-4706-b11d-06a7740a0b4f",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*Tudo bem! Vou te ajudar a corrigir.* 😊\n\nToque no botão para escolher a informação que precisa corrigir. 👇",
                      "options": [
                        {
                          "text": "E-mail",
                          "previewText": "E-mail",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Data",
                          "previewText": "Data",
                          "value": null,
                          "index": 1,
                          "type": null
                        },
                        {
                          "text": "Horário",
                          "previewText": "Horário",
                          "value": null,
                          "index": 2,
                          "type": null
                        },
                        {
                          "index": -1,
                          "text": "Unidade",
                          "previewText": "Unidade",
                          "type": null,
                          "value": null
                        }
                      ],
                      "limitMenu": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "2ab08c43-6b49-4bc8-af5f-88ed8fb802b0",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "ec78e6ad-aa2f-4736-8282-48b4155bd417",
              "typeOfStateId": "state",
              "$connId": "con_323",
              "$id": "85736849-1c5f-4e55-942a-d36d371655dc",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*mail.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "470f2528-4cf1-4c6d-b9f2-c93617775f44",
              "typeOfStateId": "state",
              "$connId": "con_328",
              "$id": "9bb67833-6b6d-4e2d-b9f5-2b1f9e34d710",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*data.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "315cdf48-6354-48bf-913b-caa37deb2929",
              "typeOfStateId": "state",
              "$connId": "con_333",
              "$id": "01b1a3e8-c480-48e2-9ab2-ce33032d0777",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*hor[aAáÁ]rio.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "62e4cbfa-83b1-4ead-b4b6-498561123481",
              "typeOfStateId": "state",
              "$connId": "con_338",
              "$id": "87e18d37-657d-459f-b08e-8531fdff609b",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*unidade.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "40cd5cd3-7b10-45a9-b6d3-938b85a2b190",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento corrigir dados",
                "action": "Exibicao"
              },
              "conditions": []
            },
            {
              "$id": "c7a259e2-10e3-4ad1-8f28-f56e6c5d15bb",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável - set toCorrect",
              "$invalid": false,
              "settings": {
                "variable": "toCorrect",
                "value": "true"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "5ff8704e-6db5-4063-b035-1f9e3201d53d",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento corrigir dados conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "E-mail",
            "Data",
            "Horário",
            "Unidade"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "76977838-1302-449c-aa52-8270ac26eb6a",
          "root": false,
          "$title": "Agendamento corrigir dados",
          "$position": {
            "top": "3403px",
            "left": "1161px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "0824f6eb-8e4e-427d-a8e3-21d7d1d15319": {
          "$contentActions": [
            {
              "action": {
                "$id": "8ffdc7fc-0670-41c7-86db-72e0a22a8081",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "78523226-9a3a-477f-8333-620225c6faf8",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "78523226-9a3a-477f-8333-620225c6faf8",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "956a9b81-a136-4e56-8cb2-6648b445c923",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "d5c28f81-ef7f-4ae7-9c19-226892f3bf3c",
                  "type": "text/plain",
                  "content": "Obrigada pelas informações! 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "d5c28f81-ef7f-4ae7-9c19-226892f3bf3c",
                    "type": "text/plain",
                    "content": "Obrigada pelas informações! 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "6fa06085-cf61-48c0-a294-4f91e66664fc",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "f8c8650f-5ea6-4269-81dc-c3fc98493ad0",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "f8c8650f-5ea6-4269-81dc-c3fc98493ad0",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "d84f5eec-87fd-4d4d-a9f4-6695d6c77c32",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "505e6a48-6c92-41f3-bd2f-71b7d57b724a",
                  "type": "text/plain",
                  "content": "Logo uma especialista vai finalizar seu agendamento.",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "505e6a48-6c92-41f3-bd2f-71b7d57b724a",
                    "type": "text/plain",
                    "content": "Logo uma especialista vai finalizar seu agendamento."
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "611323e5-0853-4cc6-9aea-92012b0d3254",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "66693e3d-ee8c-4e5b-8a2b-10386cd0bd87",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento confirmar",
                "action": "Exibicao"
              },
              "conditions": []
            },
            {
              "$id": "5d41473f-38c6-486d-a40c-d1da32621bd2",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável - set toCorrect",
              "$invalid": false,
              "settings": {
                "variable": "toCorrect",
                "value": "false"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "0824f6eb-8e4e-427d-a8e3-21d7d1d15319",
          "root": false,
          "$title": "Agendamento confirmar",
          "$position": {
            "top": "3386px",
            "left": "845px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "60f7dfaa-a040-4c91-a1ee-e92c2c23a2b1": {
          "$contentActions": [
            {
              "action": {
                "$id": "65044bed-7f02-4b08-a211-85ea4845c364",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "d115fecf-18e9-403f-ab88-6d4f55646159",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "d115fecf-18e9-403f-ab88-6d4f55646159",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "dbdcd08e-b6a0-47b8-99c4-b71e99072c73",
                "$typeOfContent": "raw-content",
                "type": "SendRawMessage",
                "settings": {
                  "metadata": {},
                  "type": "application/json",
                  "rawContent": "{\n   \"recipient_type\": \"individual\",\n   \"type\": \"interactive\",\n   \"interactive\": {\n      \"type\": \"list\",\n      \"header\": {\n         \"type\": \"text\",\n         \"text\": \"E qual é o tratamento facial?\"\n      },\n      \"body\": {\n         \"text\": \"Toque no botão para selecionar um tratamento. 👇\"\n      },\n      \"action\": {\n         \"button\": \"Selecionar opção\",\n         \"sections\": [\n            {\n               \"title\": \"Escolha uma opção\",\n               \"rows\": [\n                  {\n                     \"id\": \"ID 1.1\",\n                     \"title\": \"Harmonização Facial\"\n                  },\n                  {\n                     \"id\": \"ID 1.2\",\n                     \"title\": \"Botox\"\n                  },\n                  {\n                     \"id\": \"ID 1.3\",\n                     \"title\": \"Rugas\",\n                     \"description\": \"Rugas e linhas de expressão\"\n                  },\n                  {\n                     \"id\": \"ID 1.4\",\n                     \"title\": \"Manchas e Marcas\",\n                     \"description\": \"Manchas e marcas de acne\"\n                  },\n                  {\n                     \"id\": \"ID 1.5\",\n                     \"title\": \"Olheiras\"\n                  },\n                  {\n                     \"id\": \"ID 1.6\",\n                     \"title\": \"Limpeza de pele\"\n                  },\n                  {\n                     \"id\": \"ID 1.7\",\n                     \"title\": \"Flacidez facial\"\n                  },\n                  {\n                     \"id\": \"ID 1.8\",\n                     \"title\": \"Outro\"\n                  }\n               ]\n            }\n         ]\n      }\n   }\n}"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "adec7f65-3679-4fc6-80fe-1dbe3529d916",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "1ea52373-84e4-4164-8870-a42de620c0d3",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Procedimento tratamento Facial",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "4dea29fc-f761-403d-8ef0-6d225f4b1cc1",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Procedimento tratamento Facial  conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "c73c7498-1709-40a8-9882-c5ba32c13a40",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "60f7dfaa-a040-4c91-a1ee-e92c2c23a2b1",
          "root": false,
          "$title": "Procedimento tratamento Facial",
          "$position": {
            "top": "2006.14px",
            "left": "1462.71px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "6de826f1-88e3-4d2e-aa2d-3a53ae1b4b86": {
          "$contentActions": [
            {
              "action": {
                "$id": "60a9d598-4123-47f5-afb6-bef993e08117",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "9ff3ee51-96a2-42dc-a033-971395e88afc",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "9ff3ee51-96a2-42dc-a033-971395e88afc",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "a3ef217a-8612-4452-b208-681cc85ac9a2",
                "$typeOfContent": "select",
                "type": "SendMessage",
                "settings": {
                  "id": "48157123-fa3f-4d4c-9cf8-28924bf5c386",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*E qual é o tratamento corporal?*\nToque no botão para selecionar um tratamento. 👇",
                    "options": [
                      {
                        "text": "Gordura localizada",
                        "previewText": "Gordura localizada",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Flacidez",
                        "previewText": "Flacidez",
                        "value": null,
                        "index": 1,
                        "type": null
                      },
                      {
                        "text": "Vasinhos",
                        "previewText": "Vasinhos",
                        "value": null,
                        "index": 2,
                        "type": null
                      },
                      {
                        "index": -1,
                        "text": "Estrias",
                        "previewText": "Estrias",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Celulite",
                        "previewText": "Celulite",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Enzimas",
                        "previewText": "Enzimas",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Massagem",
                        "previewText": "Massagem",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Outro ",
                        "previewText": "Outro ",
                        "type": null,
                        "value": null
                      }
                    ],
                    "limitMenu": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "48157123-fa3f-4d4c-9cf8-28924bf5c386",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*E qual é o tratamento corporal?*\nToque no botão para selecionar um tratamento. 👇",
                      "options": [
                        {
                          "text": "Gordura localizada",
                          "previewText": "Gordura localizada",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Flacidez",
                          "previewText": "Flacidez",
                          "value": null,
                          "index": 1,
                          "type": null
                        },
                        {
                          "text": "Vasinhos",
                          "previewText": "Vasinhos",
                          "value": null,
                          "index": 2,
                          "type": null
                        },
                        {
                          "index": -1,
                          "text": "Estrias",
                          "previewText": "Estrias",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Celulite",
                          "previewText": "Celulite",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Enzimas",
                          "previewText": "Enzimas",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Massagem",
                          "previewText": "Massagem",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Outro ",
                          "previewText": "Outro ",
                          "type": null,
                          "value": null
                        }
                      ],
                      "limitMenu": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "bfac722c-7285-48fb-bcbe-b1177205520d",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "e787e3a8-158e-4a39-a1b4-17db8600037d",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Procedimento tratamento corporal",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "088008ce-72ec-4da7-98d4-2df144452d43",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Procedimento tratamento corporal conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Gordura localizada",
            "Flacidez",
            "Vasinhos",
            "Estrias",
            "Celulite",
            "Enzimas",
            "Massagem",
            "Outro "
          ],
          "$defaultOutput": {
            "stateId": "5110d2f2-a7de-4892-ba5b-a8b28aa591ae",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "6de826f1-88e3-4d2e-aa2d-3a53ae1b4b86",
          "root": false,
          "$title": "Procedimento tratamento corporal",
          "$position": {
            "top": "2009.25px",
            "left": "1761px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "5110d2f2-a7de-4892-ba5b-a8b28aa591ae": {
          "$contentActions": [
            {
              "action": {
                "$id": "1ec3e2a0-127d-4ca7-985a-f68a7a3b3ee5",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "39fc16ed-da14-4c6d-ae15-d33cbef210a7",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "39fc16ed-da14-4c6d-ae15-d33cbef210a7",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "3c91621e-a3c3-49ba-b60c-38b0567dcd91",
                "$typeOfContent": "media",
                "type": "SendMessage",
                "settings": {
                  "id": "dbaad21a-7e48-4154-9e56-da2ebc1673ec",
                  "type": "application/vnd.lime.media-link+json",
                  "content": {
                    "title": "Media link title",
                    "text": "Media link subtitle",
                    "type": "image/png",
                    "uri": "https://s3-sa-east-1.amazonaws.com/msging.net/Services/Images/2e3ff2b4-a8c6-4188-bc0c-0f23531739b2",
                    "aspectRatio": "1:1"
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "dbaad21a-7e48-4154-9e56-da2ebc1673ec",
                    "type": "application/vnd.lime.media-link+json",
                    "content": {
                      "title": "Media link title",
                      "text": "Media link subtitle",
                      "type": "image/png",
                      "uri": "https://s3-sa-east-1.amazonaws.com/msging.net/Services/Images/2e3ff2b4-a8c6-4188-bc0c-0f23531739b2",
                      "aspectRatio": "1:1"
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "33237191-deb2-4e31-ba51-f60af773b422",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "92bdb0d5-ee97-43ef-94b0-0cc52c2cf80d",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "5110d2f2-a7de-4892-ba5b-a8b28aa591ae",
          "root": false,
          "$title": "Imagem procedimento corporal",
          "$position": {
            "top": "2188.43px",
            "left": "1772px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "c73c7498-1709-40a8-9882-c5ba32c13a40": {
          "$contentActions": [
            {
              "action": {
                "$id": "da09b711-d6c5-4ced-b4dc-12b82979944c",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "5fd53535-d507-4ea6-af73-c78e3cc85c7e",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "5fd53535-d507-4ea6-af73-c78e3cc85c7e",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "344f7d5e-fcfb-4aca-8044-c431a8d6db02",
                "$typeOfContent": "media",
                "type": "SendMessage",
                "settings": {
                  "id": "e58af7be-6472-4328-b9b2-33dedde411b5",
                  "type": "application/vnd.lime.media-link+json",
                  "content": {
                    "title": "Media link title",
                    "text": "Media link subtitle",
                    "type": "image/png",
                    "uri": "https://s3-sa-east-1.amazonaws.com/msging.net/Services/Images/2e3ff2b4-a8c6-4188-bc0c-0f23531739b2",
                    "aspectRatio": "1:1"
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "e58af7be-6472-4328-b9b2-33dedde411b5",
                    "type": "application/vnd.lime.media-link+json",
                    "content": {
                      "title": "Media link title",
                      "text": "Media link subtitle",
                      "type": "image/png",
                      "uri": "https://s3-sa-east-1.amazonaws.com/msging.net/Services/Images/2e3ff2b4-a8c6-4188-bc0c-0f23531739b2",
                      "aspectRatio": "1:1"
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "bea4a50f-e7cd-4b15-af81-5dc342de7e6a",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "92bdb0d5-ee97-43ef-94b0-0cc52c2cf80d",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [],
          "id": "c73c7498-1709-40a8-9882-c5ba32c13a40",
          "root": false,
          "$title": "Imagem procedimento facial",
          "$position": {
            "top": "2191.29px",
            "left": "1460.71px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "92bdb0d5-ee97-43ef-94b0-0cc52c2cf80d": {
          "$contentActions": [
            {
              "action": {
                "$id": "dcff0d32-875d-4553-9014-3ec59a32c71e",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "75863c2c-8296-4d78-bc12-512b39dc1f5a",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "75863c2c-8296-4d78-bc12-512b39dc1f5a",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "8ff17e1f-1c55-467e-b593-33cfc905d770",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "d1eab11f-4f1b-4f19-898a-72a3bc3932b9",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*O que você gostaria de fazer agora?*\n\nSelecione uma das opções. 😉",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Agendar procedimento",
                        "previewText": "Agendar procedimento",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Ver outros",
                        "previewText": "Ver outros",
                        "value": null,
                        "index": 1,
                        "type": null
                      },
                      {
                        "index": -1,
                        "text": "Voltar ao menu",
                        "previewText": "Voltar ao menu",
                        "type": null,
                        "value": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "d1eab11f-4f1b-4f19-898a-72a3bc3932b9",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*O que você gostaria de fazer agora?*\n\nSelecione uma das opções. 😉",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Agendar procedimento",
                          "previewText": "Agendar procedimento",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Ver outros",
                          "previewText": "Ver outros",
                          "value": null,
                          "index": 1,
                          "type": null
                        },
                        {
                          "index": -1,
                          "text": "Voltar ao menu",
                          "previewText": "Voltar ao menu",
                          "type": null,
                          "value": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "8c3bbc06-46aa-4f14-bf23-45bd490aca3a",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "c5dc00fd-fb8e-4042-a916-228e7474fa7a",
              "typeOfStateId": "state",
              "$connId": "con_343",
              "$id": "5dceb137-c53c-43f9-aa0f-53296de3b00f",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*agendar.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "97bf4c32-71b2-4972-bf19-d571dc8e25c9",
              "typeOfStateId": "state",
              "$connId": "con_348",
              "$id": "1c9cf95f-f8cf-4f7f-9024-a5d43fc941ed",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*outro.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "52b31d32-bb47-43c7-a4c2-fc82ce681bc6",
              "typeOfStateId": "state",
              "$connId": "con_353",
              "$id": "989c1b1e-7616-48a2-a921-db6ce0bd22e9",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*menu.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "e7087f09-3a5f-44d5-8dbe-ae5817ceb968",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Mais procedimentos",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "64b9c2bc-a48a-4d4c-8529-c3fd6aec8c18",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Mais procedimentos conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Agendar procedimento",
            "Ver outros",
            "Voltar ao menu"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "92bdb0d5-ee97-43ef-94b0-0cc52c2cf80d",
          "root": false,
          "$title": "Mais procedimentos",
          "$position": {
            "top": "2364.75px",
            "left": "1618.25px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "310a8133-1344-4ffd-b3ac-61d4de3b6e29": {
          "$contentActions": [
            {
              "action": {
                "$id": "72e2b9b0-e49a-4c6a-a217-59a33074960a",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "9613e860-bce5-481a-b812-6b39d8c790b1",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "9613e860-bce5-481a-b812-6b39d8c790b1",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "a647a303-2fba-418b-bd64-9e67b363b793",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "159fd55a-d7ae-4d92-add0-d87a9657d699",
                  "type": "text/plain",
                  "content": "Por aqui ainda consigo te ajudar a tirar algumas dúvidas. 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "159fd55a-d7ae-4d92-add0-d87a9657d699",
                    "type": "text/plain",
                    "content": "Por aqui ainda consigo te ajudar a tirar algumas dúvidas. 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "52b7df26-cb26-4ed3-a0dc-775ac29c3ae6",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "600aa40f-ce76-4d9c-96a6-f56cf0104efe",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "600aa40f-ce76-4d9c-96a6-f56cf0104efe",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "47dd8626-06cb-4e2e-9ef4-2fe66e75bdb1",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "0e445754-3cd8-4311-a4cf-866fc2b630b6",
                  "type": "text/plain",
                  "content": "Me conta, em poucas palavras, qual é a sua *dúvida*.",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "0e445754-3cd8-4311-a4cf-866fc2b630b6",
                    "type": "text/plain",
                    "content": "Me conta, em poucas palavras, qual é a sua *dúvida*."
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "509325d8-e819-4e4a-85f4-408f8bded446",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "typeOfStateId": "state",
              "$connId": "con_358",
              "$id": "f8b1cfc0-b38b-4e57-b590-d19d11b5719b",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*atendente.*)",
                    "(?i)(.*atendimento.*)",
                    "(?i)(.*humano.*)",
                    "(?i)(.*falar.*)"
                  ]
                }
              ],
              "$invalid": false,
              "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1"
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "40a72ff7-5746-4bdf-9e9e-3c6096480933",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}"
                },
                "category": "FAQ",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "3c21f27e-beba-4e35-9e46-11421c2ea7b5",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}"
                },
                "category": "FAQ conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "cff61cac-20ac-461f-8359-1c6ac4a329e5",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "310a8133-1344-4ffd-b3ac-61d4de3b6e29",
          "root": false,
          "$title": "FAQ",
          "$position": {
            "top": "1877px",
            "left": "2877px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false,
          "invalidOutputs": true
        },
        "cff61cac-20ac-461f-8359-1c6ac4a329e5": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "ce8c1da9-38af-4656-aac1-37cb236113a4",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "90bd25b4-540b-47a6-af01-cff73ef96244",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "REQUISIÇÃO HTTP - REFRESH TOKEN",
              "$invalid": false,
              "settings": {
                "headers": {},
                "method": "POST",
                "body": "{\n    \"client_secret\": \"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\",\n    \"grant_type\": \"refresh_token\",\n    \"refresh_token\": \"1//044fDP6QQaRecCgYIARAAGAQSNwF-L9IrQEGaeNyTX5AfdrTdV5aA0kxjAdJBVBs6TYNP3--xgG_lkgcuHqTv13e8FwNXrdTlfoo\",\n    \"client_id\": \"495066202581-b7hr95pep1f3m4gdasl2lh8bin9spsut.apps.googleusercontent.com\"\n}",
                "uri": "https://accounts.google.com/o/oauth2/token",
                "responseStatusVariable": "googleTokenStatus",
                "responseBodyVariable": "googleTokenResponse"
              },
              "conditions": []
            },
            {
              "$id": "93771627-8a64-44cb-a589-9a6dc58e3b59",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "REQUISIÇÃO HTTP - GET SHEETS DATA",
              "$invalid": false,
              "settings": {
                "headers": {
                  "Authorization": "Bearer {{googleTokenResponse@access_token}}"
                },
                "method": "POST",
                "body": "{\n  \"dataFilters\": [\n    {\n      \"a1Range\": \"FAQ!A:A\"\n    }\n  ],\n  \"valueRenderOption\": \"FORMATTED_VALUE\",\n  \"dateTimeRenderOption\": \"FORMATTED_STRING\",\n  \"majorDimension\": \"COLUMNS\"\n}",
                "uri": "https://sheets.googleapis.com/v4/spreadsheets/{{config.sheetId}}/values:batchGetByDataFilter",
                "responseStatusVariable": "getSheetDataStatus",
                "responseBodyVariable": "getSheetDataResponse"
              },
              "conditions": []
            },
            {
              "$id": "713edd9a-e177-44dd-aeb3-165b0c9cd7c7",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "REQUISIÇÃO HTTP - GET SHEETS keyword",
              "$invalid": false,
              "settings": {
                "headers": {
                  "Authorization": "Bearer {{googleTokenResponse@access_token}}"
                },
                "method": "POST",
                "body": "{\n  \"dataFilters\": [\n    {\n      \"a1Range\": \"FAQ!C:C\"\n    }\n  ],\n  \"valueRenderOption\": \"FORMATTED_VALUE\",\n  \"dateTimeRenderOption\": \"FORMATTED_STRING\",\n  \"majorDimension\": \"COLUMNS\"\n}",
                "uri": "https://sheets.googleapis.com/v4/spreadsheets/{{config.sheetId}}/values:batchGetByDataFilter",
                "responseStatusVariable": "getSheetKeywordDataStatus",
                "responseBodyVariable": "getSheetKeywordDataResponse"
              },
              "conditions": []
            },
            {
              "$id": "340cdded-28eb-43cf-8a13-4d566e5583c9",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get list faq",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n           function run(getSheetDataResponse) {\n            try {\n                let sheetDataResponse = JSON.parse(getSheetDataResponse);\n                sheetDataResponse = sheetDataResponse.valueRanges[0].valueRange.values[0];\n                if (sheetDataResponse && sheetDataResponse.length > 0) return sheetDataResponse\n            }\n            catch (e) {\n                return \"N/A\"; //Return value will be saved as \"Return value variable\" field name\n            }\n}\n\n",
                "inputVariables": [
                  "getSheetDataResponse"
                ],
                "outputVariable": "listFaqArr",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "e3a179e7-9617-4361-9d5d-28495c64f1ef",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get list keyword",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n           function run(getSheetDataResponse) {\n            try {\n                let sheetDataResponse = JSON.parse(getSheetDataResponse);\n                sheetDataResponse = sheetDataResponse.valueRanges[0].valueRange.values[0];\n                if (sheetDataResponse && sheetDataResponse.length > 0) return sheetDataResponse\n\n                return 'N/A'\n            }\n            catch (e) {\n                return \"N/A\"; //Return value will be saved as \"Return value variable\" field name\n            }\n}\n\n",
                "inputVariables": [
                  "getSheetKeywordDataResponse"
                ],
                "outputVariable": "listKeyword",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "848e60c1-26eb-4ec5-8c1b-6050c85c37b4",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get content",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\nfunction run(input, listFaq) {\n    try {\n        let sheetDataResponse = JSON.parse(listFaq);\n        return (findMatch(sheetDataResponse, input))\n    }catch (e) {\n        return \"N/A\"; //Return value will be saved as \"Return value variable\" field name\n    }\n}\n\nfunction findMatch(sheetDataResponse, input) {\n    if (sheetDataResponse && sheetDataResponse.length > 0) {\n        const foundElement = sheetDataResponse.find(element => element.trim().toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').includes(input.trim().toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, '')));\n        return foundElement ? foundElement : 'N/A';\n    }\n    return 'N/A';\n}\n\n\n",
                "inputVariables": [
                  "input.content",
                  "listFaqArr"
                ],
                "outputVariable": "question",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            },
            {
              "$id": "0fcce8ae-7ed6-49d1-9f2b-37169f67339b",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get content keyword",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\nfunction run(input, listFaq) {\n    try {\n        let sheetDataResponse = JSON.parse(listFaq);\n        if(sheetDataResponse[findMatch(sheetDataResponse, input)]) return sheetDataResponse[findMatch(sheetDataResponse, input)]\n\n        return 'N/A'\n    }catch (e) {\n        return \"N/A\"; //Return value will be saved as \"Return value variable\" field name\n    }\n}\n\nfunction findMatch(sheetDataResponse, input) {\n    if (sheetDataResponse && sheetDataResponse.length > 0) {\n        let newArray = [];\n        let includes = [];\n        for (let i = 0; i < sheetDataResponse.length; i++) {\n            newArray.push({\n                position: i,\n                content: sheetDataResponse[i].split(',')\n            })\n        }\n        for (let i = 0; i < newArray.length; i++) {\n            includes.push(newArray[i].content.some(e => input.trim().toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').includes(e.trim().toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, ''))))\n        }\n        const result = includes.reduce((acc, value, index) => {\n            if (value) {\n                acc.push({ index });\n            }\n            return acc;\n        }, []);\n        return result[0].index\n    }\n    return 'N/A';\n}\n\n\n",
                "inputVariables": [
                  "input.content",
                  "listKeyword"
                ],
                "outputVariable": "questionKeyword",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "56d5e0e4-068d-4eac-97d5-4a77083ecceb",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#FF4A1E",
              "label": "api",
              "id": "blip-tag-3e2da027-b53c-b44c-b5e6-9b644a76b896",
              "canChangeBackground": false
            }
          ],
          "id": "cff61cac-20ac-461f-8359-1c6ac4a329e5",
          "root": false,
          "$title": "Geet sheet faq",
          "$position": {
            "top": "2001px",
            "left": "2872.89px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "3ef0afdb-60a7-4e42-869b-e1f9c141adf1": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "72fca52a-caa5-4914-90dc-f41452d86ee6",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "d9de1fb5-f3c7-4ffd-ac36-3058031ab625",
              "typeOfStateId": "state",
              "$connId": "con_363",
              "$id": "9b4552f3-b10b-4a72-bbaf-2f6222d65c6e",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "true"
                  ],
                  "variable": "firstTry"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "$invalid": false,
            "typeOfStateId": "state",
            "stateId": "5d20d48a-5ea7-4690-a1bc-57b2fa1a71f9"
          },
          "$tags": [],
          "id": "3ef0afdb-60a7-4e42-869b-e1f9c141adf1",
          "root": false,
          "$title": "FAQ nao encontrada",
          "$position": {
            "top": "2275.75px",
            "left": "2587.75px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false,
          "invalidOutputs": true
        },
        "56d5e0e4-068d-4eac-97d5-4a77083ecceb": {
          "$contentActions": [
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "7615aafe-37ea-4268-bc55-d977e3e5002b",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "typeOfStateId": "state",
              "$connId": "con_368",
              "$id": "d4214857-255c-4ecd-91bc-69b5357cdcea",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "N/A"
                  ],
                  "variable": "response"
                }
              ],
              "$invalid": false,
              "stateId": "3ef0afdb-60a7-4e42-869b-e1f9c141adf1"
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "136af9a8-d2ac-40cf-af7c-eab1b93b97c6",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "EXECUTAR SCRIPT - GET sheet IDX",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n            function run(getSheetDataResponse, question) {\n                try {\n                    let sheets = JSON.parse(getSheetDataResponse);\n                    \n\n                    sheets = sheets.valueRanges[0].valueRange.values[0];\n\n                    let idx = sheets.findIndex(s => s === question);\n\n                    if(idx == -1) {\n                        return -1;\n                    }\n\n                    return idx + 1;\n                } catch(e) {\n\n                    return -1;\n                }\n\n                return -1;\n            }",
                "inputVariables": [
                  "getSheetDataResponse",
                  "question"
                ],
                "outputVariable": "sheetIdx",
                "LocalTimeZoneEnabled": false
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "notEquals",
                  "variable": "question",
                  "values": [
                    "N/A"
                  ]
                }
              ]
            },
            {
              "$id": "fc263ea6-7245-4f68-91c0-db404d953538",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "EXECUTAR SCRIPT - GET sheet IDX",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n            function run(getSheetDataResponse, question) {\n                try {\n                    let sheets = JSON.parse(getSheetDataResponse);\n                    \n\n                    sheets = sheets.valueRanges[0].valueRange.values[0];\n\n                    let idx = sheets.findIndex(s => s === question);\n\n                    if(idx == -1) {\n                        return -1;\n                    }\n\n                    return idx + 1;\n                } catch(e) {\n\n                    return -1;\n                }\n\n                return -1;\n            }",
                "inputVariables": [
                  "getSheetKeywordDataResponse",
                  "questionKeyword"
                ],
                "outputVariable": "sheetIdx",
                "LocalTimeZoneEnabled": false
              },
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "variable": "question",
                  "values": [
                    "N/A"
                  ]
                }
              ]
            },
            {
              "$id": "c2cbc320-653a-42a4-b03a-4f394ea330d0",
              "$typeOfContent": "",
              "type": "ProcessHttp",
              "$title": "REQUISIÇÃO HTTP - GET SHEET ROW DATA",
              "$invalid": false,
              "settings": {
                "headers": {
                  "Authorization": "Bearer {{googleTokenResponse@access_token}}"
                },
                "method": "POST",
                "body": "{\n  \"dataFilters\": [\n    {\n      \"a1Range\": \"FAQ!A{{sheetIdx}}:J{{sheetIdx}}\"\n    }\n  ],\n  \"valueRenderOption\": \"FORMATTED_VALUE\",\n  \"dateTimeRenderOption\": \"FORMATTED_STRING\",\n  \"majorDimension\": \"ROWS\"\n}",
                "uri": "https://sheets.googleapis.com/v4/spreadsheets/{{config.sheetId}}/values:batchGetByDataFilter",
                "responseStatusVariable": "getSheetDataRowStatus",
                "responseBodyVariable": "getSheetDataRowResponse"
              },
              "conditions": []
            },
            {
              "$id": "8d6a6889-2a2f-4ada-931a-a32e0d5283f8",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get response",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\n            function run(getSheetDataRowResponse) {\n                try {\n                    let sheets = JSON.parse(getSheetDataRowResponse);\n                    \n\n                    sheets = sheets.valueRanges[0].valueRange.values[0];\n                    \n                    return sheets[1]\n\n                } catch(e) {\n\n                    return 'N/A';\n                }\n\n                return 'N/A';\n            }",
                "inputVariables": [
                  "getSheetDataRowResponse"
                ],
                "outputVariable": "response",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "9fac5d41-8287-4364-ab1c-3376fc58e76f",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}"
                },
                "category": "Resposta FAQ conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "499b3759-b06a-4516-8701-31b08b9f2f0a",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#FF4A1E",
              "label": "api",
              "id": "blip-tag-3e2da027-b53c-b44c-b5e6-9b644a76b896",
              "canChangeBackground": false
            }
          ],
          "id": "56d5e0e4-068d-4eac-97d5-4a77083ecceb",
          "root": false,
          "$title": "Busca resposta FAQ",
          "$position": {
            "top": "2126.25px",
            "left": "2875.25px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false,
          "invalidOutputs": true
        },
        "499b3759-b06a-4516-8701-31b08b9f2f0a": {
          "$contentActions": [
            {
              "action": {
                "$id": "5253e3f5-3c9b-4fd6-a044-a7f49cc28c58",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "eeb0f241-b22e-45de-9b3a-848ca0bdceb3",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "eeb0f241-b22e-45de-9b3a-848ca0bdceb3",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "970f8875-b0b8-498b-bfd7-bc5f0f977a4b",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "4ac5737e-a73b-4b6c-824e-161a3b56a4ab",
                  "type": "text/plain",
                  "content": "{{response}}",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "4ac5737e-a73b-4b6c-824e-161a3b56a4ab",
                    "type": "text/plain",
                    "content": "{{response}}"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "0e6f8ae8-d860-4a58-b13b-6467c03ea6f2",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "52606f04-903c-482a-991b-aedac56ccd82",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "52606f04-903c-482a-991b-aedac56ccd82",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "74c761a9-b82a-43d0-9e2d-711216d03559",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "3261bcda-eec0-4a26-9a17-4798b93c5095",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "Consegui tirar a sua dúvida?",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Sim",
                        "previewText": "Sim",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Não",
                        "previewText": "Não",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "3261bcda-eec0-4a26-9a17-4798b93c5095",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "Consegui tirar a sua dúvida?",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Sim",
                          "previewText": "Sim",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Não",
                          "previewText": "Não",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "b4fa1729-9d85-4271-b687-165a2ca3c3ee",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "typeOfStateId": "state",
              "$connId": "con_373",
              "$id": "adf81c95-1c4c-479f-87c1-495f0ecab8cc",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*sim.*)"
                  ]
                }
              ],
              "$invalid": false,
              "stateId": "613f1999-e40c-4731-aa4a-7594d6f71892"
            },
            {
              "stateId": "97923533-641d-4e82-b32f-2fce0b6e986a",
              "typeOfStateId": "state",
              "$connId": "con_378",
              "$id": "91cd1123-d0e6-4fca-bb46-acea28628797",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*n[aAãÃ]o.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "93e8a5a2-c81b-4b90-aae3-04bc4e7c78a7",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}"
                },
                "category": "Resposta FAQ",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "21e4ea7b-9167-494a-81e9-5e7942f3762f",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {
                  "date": "{{calendar.date}}",
                  "npsScore": "{{npsScore}}",
                  "identity": "{{contact.identity}}"
                },
                "category": "Resposta FAQ conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "source": "input",
                  "comparison": "exists",
                  "values": []
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Sim",
            "Não"
          ],
          "$defaultOutput": {
            "$invalid": false,
            "typeOfStateId": "state",
            "stateId": "fallback"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "499b3759-b06a-4516-8701-31b08b9f2f0a",
          "root": false,
          "$title": "Resposta FAQ",
          "$position": {
            "top": "2286.57px",
            "left": "3164.71px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false,
          "invalidOutputs": true
        },
        "d9de1fb5-f3c7-4ffd-ac36-3058031ab625": {
          "$contentActions": [
            {
              "action": {
                "$id": "36d3de2e-10bf-4a7c-9df2-07160f9c83ee",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "00883912-f4e2-442b-94ed-9a6afa5620c0",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "00883912-f4e2-442b-94ed-9a6afa5620c0",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "3e77078a-473d-4801-a475-0736c54a6fac",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "14189e4a-f005-4440-a582-a1f78384a653",
                  "type": "text/plain",
                  "content": "{{menuList}}",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "14189e4a-f005-4440-a582-a1f78384a653",
                    "type": "text/plain",
                    "content": "{{menuList}}"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "9d02ebe1-ce96-4721-a5d5-14705b2be24a",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "52b31d32-bb47-43c7-a4c2-fc82ce681bc6",
              "typeOfStateId": "state",
              "$connId": "con_383",
              "$id": "667b3b00-e6c0-443c-bb5b-4ed6bffb342f",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "contains",
                  "values": [
                    "Voltar ao menu anterior"
                  ],
                  "variable": "question"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "310a8133-1344-4ffd-b3ac-61d4de3b6e29",
              "typeOfStateId": "state",
              "$connId": "con_388",
              "$id": "7fe4355c-559a-4ac4-b96a-2ae0fd72f383",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "contains",
                  "values": [
                    "Outras dúvidas"
                  ],
                  "variable": "question"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "97923533-641d-4e82-b32f-2fce0b6e986a",
              "typeOfStateId": "state",
              "$connId": "con_393",
              "$id": "e6630347-d64e-44e8-9495-9010430b6e73",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "Não encontrei minha dúvida"
                  ],
                  "variable": "question"
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "fallback",
              "typeOfStateId": "state",
              "$connId": "con_398",
              "$id": "65c5d0af-1e02-490f-a7a3-f32e9a0d06ce",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "N/A"
                  ],
                  "variable": "question"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "a3f313b1-8561-4a3b-8669-8c339bddd2c5",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu list faq",
                "action": "Exibicao"
              },
              "conditions": []
            },
            {
              "$id": "7fbfceb2-ef77-4c46-ab00-b9dc98753d2b",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável - set first try",
              "$invalid": false,
              "settings": {
                "variable": "firstTry",
                "value": "false"
              },
              "conditions": []
            },
            {
              "$id": "c691ec9c-8093-4fb3-9f8a-8c0d1ecd9056",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script - get faq list",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(listFaqArr) {\n  try {\n    let faq = JSON.parse(listFaqArr);\n    let text = `*Qual das opções abaixo se aproxima mais da sua dúvida?*\\n\\n`\n    let i = 0;\n    if (faq && faq.length > 0) {\n      for (i; i < faq.length; i++) {\n        text = text + `${i + 1} - ${faq[i]}\\n`\n      }\n      text = text + `${i + 1} - Outras dúvidas\\n`\n      text = text + `${i + 2} - Não encontrei minha dúvida\\n`\n      text = text + `${i + 3} - Voltar ao menu anterior`\n\n      return text\n    }\n  } catch (e) { }\n}",
                "inputVariables": [
                  "listFaqArr"
                ],
                "LocalTimeZoneEnabled": false,
                "outputVariable": "menuList"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "5a201bd6-a7ee-4d2d-8da9-5b37f8fc192d",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Menu list faq conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            },
            {
              "$id": "81fe03b6-3efe-4715-8426-8cb71f3a0432",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n            * All input variables needs to be passed as function param;\n            * Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n            * Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n            **/\nfunction run(input, listFaq) {\n  try {\n      let sheetDataResponse = JSON.parse(listFaq);\n\n      if (sheetDataResponse && sheetDataResponse.length > 0) {\n        if (isNaN(input)) {\n          for (let i = 0; i < sheetDataResponse.length; i++) {\n              if (sheetDataResponse[i].includes(input)) {\n                  return sheetDataResponse[i]\n              }\n          }\n      } else {\n          if (input == (sheetDataResponse.length + 1)) {\n              return 'Outras dúvidas'\n          } else if (input == (sheetDataResponse.length + 2)) {\n              return 'Não encontrei minha dúvida'\n          } else if (input == (sheetDataResponse.length + 3)) {\n              return 'Voltar ao menu anterior'\n          } else {\n              return sheetDataResponse[input - 1]\n          }\n      }\n\n          return 'N/A'\n      }\n  }\n  catch (e) {\n      return \"N/A\"; //Return value will be saved as \"Return value variable\" field name\n  }\n}\n\n\n",
                "inputVariables": [
                  "input.content",
                  "listFaqArr"
                ],
                "outputVariable": "question",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "cff61cac-20ac-461f-8359-1c6ac4a329e5",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "d9de1fb5-f3c7-4ffd-ac36-3058031ab625",
          "root": false,
          "$title": "Menu list faq",
          "$position": {
            "top": "2411.11px",
            "left": "2715px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "5d20d48a-5ea7-4690-a1bc-57b2fa1a71f9": {
          "$contentActions": [
            {
              "action": {
                "$id": "0082a0dd-b44a-4683-9fb5-bf1b8c32c5c1",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "8a7e4397-4968-4dee-8c22-47d42872c072",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "8a7e4397-4968-4dee-8c22-47d42872c072",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "df356a88-0c6e-4a40-85d5-5f662debf7ef",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "d627a37e-35f3-4eed-8323-dc2e8e4fd715",
                  "type": "text/plain",
                  "content": "Não consegui encontrar nenhuma resposta para isso...🤔\n\nVamos tentar novamente!\n\n\n👉  *Exemplo:*_Como funciona o Butox?__",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "d627a37e-35f3-4eed-8323-dc2e8e4fd715",
                    "type": "text/plain",
                    "content": "Não consegui encontrar nenhuma resposta para isso...🤔\n\nVamos tentar novamente!\n\n\n👉  *Exemplo:*_Como funciona o Butox?__"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "31fb8365-163f-45c2-9322-df9c8647a47a",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "134be8fa-0622-4106-a504-cde9f25b420a",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Faq resposta nao encontrada 1 tentativa",
                "action": "Exibicao"
              },
              "conditions": []
            },
            {
              "$id": "7cc52acc-a1b6-4573-9e0e-1fab9c83b071",
              "$typeOfContent": "",
              "type": "SetVariable",
              "$title": "Definir variável - set first try",
              "$invalid": false,
              "settings": {
                "variable": "firstTry",
                "value": "true"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "76e8a528-b72d-4edd-8d3c-ed36c12e8532",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Faq resposta nao encontrada 1 tentativa conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "cff61cac-20ac-461f-8359-1c6ac4a329e5",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "5d20d48a-5ea7-4690-a1bc-57b2fa1a71f9",
          "root": false,
          "$title": "Faq resposta nao encontrada 1 tentativa",
          "$position": {
            "top": "2405.11px",
            "left": "2422px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "97923533-641d-4e82-b32f-2fce0b6e986a": {
          "$contentActions": [
            {
              "action": {
                "$id": "6929dd83-2f39-44bb-b6c8-59ac5c00ba79",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "09739d59-995a-4041-b67a-0c3aca5a94d6",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "09739d59-995a-4041-b67a-0c3aca5a94d6",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "787eeb72-b172-4d41-9e61-7bffe4b35a49",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "e6aae058-8219-4b5d-ba66-b0374e717c7b",
                  "type": "text/plain",
                  "content": "Vou buscar uma especialista para ajudar você com sua dúvida.",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "e6aae058-8219-4b5d-ba66-b0374e717c7b",
                    "type": "text/plain",
                    "content": "Vou buscar uma especialista para ajudar você com sua dúvida."
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "9f449cc3-5a46-42a4-a89b-bee75c5c5074",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "d9ccadc2-a521-4f56-b8ca-5cbf9b12a251",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Nao conseguiu tirar duvida",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "97923533-641d-4e82-b32f-2fce0b6e986a",
          "root": false,
          "$title": "Nao conseguiu tirar duvida",
          "$position": {
            "top": "2417px",
            "left": "3035px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "613f1999-e40c-4731-aa4a-7594d6f71892": {
          "$contentActions": [
            {
              "action": {
                "$id": "b3189a40-ea6d-41f3-8e31-e765f0f45656",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "92e03414-cf1c-4276-ae14-13609e28e604",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "92e03414-cf1c-4276-ae14-13609e28e604",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "01093ab8-bc4c-498d-b6dd-51bd2e131b4f",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "75b7e774-56cf-443a-b481-7baa058fded8",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "Deseja tirar mais alguma dúvida?",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Sim",
                        "previewText": "Sim",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Não",
                        "previewText": "Não",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "75b7e774-56cf-443a-b481-7baa058fded8",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "Deseja tirar mais alguma dúvida?",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Sim",
                          "previewText": "Sim",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Não",
                          "previewText": "Não",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "976cd12d-4499-4561-ae99-f286d4712ef2",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "310a8133-1344-4ffd-b3ac-61d4de3b6e29",
              "typeOfStateId": "state",
              "$connId": "con_403",
              "$id": "67cf6ab7-44be-42a4-a8a2-7e3185920a46",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*sim.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "d557bccb-c1be-4adb-a591-2b02d1ea9415",
              "typeOfStateId": "state",
              "$connId": "con_408",
              "$id": "c4d29d19-f832-48ac-811d-b61adcfe594f",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*n[aAãÃ]o.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "319bf65f-6eed-473f-8028-c5161912aaa6",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Tirou mais duvida",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "1098dee1-75e0-4377-bfa5-c5c81a2aaf02",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Tirou mais duvida conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Sim",
            "Não"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "613f1999-e40c-4731-aa4a-7594d6f71892",
          "root": false,
          "$title": "Tirou mais duvida",
          "$position": {
            "top": "2426.11px",
            "left": "3280px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "9520df61-ba30-4a6b-8a66-34b31999f0c4": {
          "$contentActions": [
            {
              "action": {
                "$id": "b83bca53-cdad-44fb-8937-60c96da5a504",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "1396debb-4c9a-4cc5-a7cb-6cde3e6f04bb",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "1396debb-4c9a-4cc5-a7cb-6cde3e6f04bb",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "cb8c9a9f-b1b4-401b-8d2d-e58feb603160",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "cd72825c-2c1d-4c89-96b5-b0660239beff",
                  "type": "text/plain",
                  "content": "Vou te direcionar para uma atendente.\n\n🙂 _O tempo médio de espera está em torno de 20 minutos._",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "cd72825c-2c1d-4c89-96b5-b0660239beff",
                    "type": "text/plain",
                    "content": "Vou te direcionar para uma atendente.\n\n🙂 _O tempo médio de espera está em torno de 20 minutos._"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "bd9b6e88-e356-457c-b933-25b6403aad98",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "05b00aac-871b-4ab2-a894-da58b2be0bf7",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "05b00aac-871b-4ab2-a894-da58b2be0bf7",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "ca8cf6a7-67c8-427d-abb1-ed46972060ce",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "c48104f0-0467-4731-8f63-9014b8ccda5a",
                  "type": "text/plain",
                  "content": "Se preferir agilizar seu atendimento, você pode ligar no número:",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "c48104f0-0467-4731-8f63-9014b8ccda5a",
                    "type": "text/plain",
                    "content": "Se preferir agilizar seu atendimento, você pode ligar no número:"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "32bb28ae-4656-489d-abfe-c5edbd65d7a0",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "310b8f61-8a3e-4601-b01d-5b8009c27168",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "310b8f61-8a3e-4601-b01d-5b8009c27168",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "a48265c6-cdac-4c9d-9f67-243cba2e83f4",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "0d891618-6e28-42fe-8dff-57d172fb50f1",
                  "type": "text/plain",
                  "content": "(11) 4118-9955",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "0d891618-6e28-42fe-8dff-57d172fb50f1",
                    "type": "text/plain",
                    "content": "(11) 4118-9955"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "d17d15c8-c327-44be-ae80-ff60fde2de15",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "a5c83f1f-4498-423d-ae7c-49de7997e182",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Inatividade 2 redireciona",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "8902d28f-c87b-43ce-a7cf-d5bc80a14ae4",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Inatividade 2 redireciona conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "9520df61-ba30-4a6b-8a66-34b31999f0c4",
          "root": false,
          "$title": "Inatividade 2 redireciona",
          "$position": {
            "top": "1962.33px",
            "left": "5104.33px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "5807d47b-1749-4086-8999-09f0b26b815e": {
          "$contentActions": [
            {
              "action": {
                "$id": "9807dfbb-a55f-4f97-a80a-1fb7e45bc62d",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "56e201e5-3cb4-4519-832d-a7b18dba7a07",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "56e201e5-3cb4-4519-832d-a7b18dba7a07",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "cdd1e6f2-f46d-41f9-baf8-8d1553cc3aa6",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "d9f0f149-5219-4e97-87b6-cb7313cec6a4",
                  "type": "text/plain",
                  "content": "Tok,tok... 🚪\n\nAinda está por ai? 😄",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "d9f0f149-5219-4e97-87b6-cb7313cec6a4",
                    "type": "text/plain",
                    "content": "Tok,tok... 🚪\n\nAinda está por ai? 😄"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "1416bb02-ec54-4cb8-a370-60c4710c4963",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "0101448b-6b90-4726-951c-8454ede37e17",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Inatividade 1",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "b6da90cd-ff67-4b5b-9dd4-f6cc2bcbf9fb",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Inatividade 1 conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "5807d47b-1749-4086-8999-09f0b26b815e",
          "root": false,
          "$title": "Inatividade 1",
          "$position": {
            "top": "1812px",
            "left": "5108.33px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "27bb8bf3-3426-415e-acb9-98e576425afd": {
          "$contentActions": [
            {
              "action": {
                "$id": "ad80942b-000f-4e6f-997b-b6529605d66a",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "d2996ac8-8af3-4f5e-a1b4-7df0e9994d28",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "d2996ac8-8af3-4f5e-a1b4-7df0e9994d28",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "882dc68c-5c1d-463a-a1d9-0e2a83bde4f0",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "cd85f800-4df1-42f1-8093-32cf79d06298",
                  "type": "text/plain",
                  "content": "Obrigado pelas respostas!\n\nSua avaliação vai me ajudar a continuar evoluindo. 🙂",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "cd85f800-4df1-42f1-8093-32cf79d06298",
                    "type": "text/plain",
                    "content": "Obrigado pelas respostas!\n\nSua avaliação vai me ajudar a continuar evoluindo. 🙂"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "ae8ab9fc-c017-4d0c-b247-c2e1f77881e3",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "448cedea-4df2-41a4-8b61-29ed5a05a796",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agradecimento CES",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "c076d138-55ff-40f0-b069-c620a81b114d",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "27bb8bf3-3426-415e-acb9-98e576425afd",
          "root": false,
          "$title": "Agradecimento CES",
          "$position": {
            "top": "4558.56px",
            "left": "3510.67px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "c315ac34-7d1e-4353-b04a-d50c73edfa03": {
          "$contentActions": [
            {
              "action": {
                "$id": "49e0d6af-7899-4595-84af-627ce2efa536",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "91533dff-2343-4785-9cb3-e07ee72418a0",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "91533dff-2343-4785-9cb3-e07ee72418a0",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "a9e93f9a-7de4-41c9-8663-b5178356dd6b",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "683238a0-39ec-4179-bb90-1ed79fdf92d1",
                  "type": "text/plain",
                  "content": "Tudo bem! Obrigado por responder até aqui. 🙂",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "683238a0-39ec-4179-bb90-1ed79fdf92d1",
                    "type": "text/plain",
                    "content": "Tudo bem! Obrigado por responder até aqui. 🙂"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "790d9324-9805-4d3f-bec7-9b602e5cf2d6",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "1596c6c1-e58a-4b43-8e67-67b2acd9a2d0",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Nao quer comentar",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "c076d138-55ff-40f0-b069-c620a81b114d",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "c315ac34-7d1e-4353-b04a-d50c73edfa03",
          "root": false,
          "$title": "Nao quer comentar",
          "$position": {
            "top": "4429.44px",
            "left": "3678.89px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "a7ae1434-ab48-45cb-95c4-c5198fd7ae97": {
          "$contentActions": [
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "7910b519-2e07-4e40-8179-d9888a7ba283",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "b8a37953-6207-42ab-bd59-345dc6ddd41f",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Optout",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "e682e23c-62be-4656-8a93-61d29d36f761",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Optout conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "a7ae1434-ab48-45cb-95c4-c5198fd7ae97",
          "root": false,
          "$title": "Optout",
          "$position": {
            "top": "3067.29px",
            "left": "4050.14px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "df9cdee4-0672-4ae5-bbac-7a85e2859c78": {
          "$contentActions": [
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "11a8a4a4-329a-4c89-bf63-9782680856b4",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "5dff6e87-e72b-46db-9df4-2f380221958e",
              "typeOfStateId": "state",
              "$connId": "con_413",
              "$id": "2a935b4c-c260-4829-a783-1412599d0137",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(^1)",
                    "(?i)(.*responder.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "4055b2b7-3998-4be6-bb5a-6689fbbad65d",
              "typeOfStateId": "state",
              "$connId": "con_418",
              "$id": "545bd646-3367-4014-89e1-23d9cc49b311",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(^2)",
                    "(?i)(.*tarde.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "09b94ab6-cfdc-498b-9fc7-7371c315c461",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Disparo NPS",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "642e0f96-b11e-4725-aa43-f5ecad9a80f8",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Disparo NPS conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "df9cdee4-0672-4ae5-bbac-7a85e2859c78",
          "root": false,
          "$title": "Disparo NPS",
          "$position": {
            "top": "3027.86px",
            "left": "5040.29px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "5dff6e87-e72b-46db-9df4-2f380221958e": {
          "$contentActions": [
            {
              "action": {
                "$id": "1d640bf2-7d81-4247-9d8d-717ef67f614e",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "07b1ea87-d3b8-4d6b-b710-6bb15681570c",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "07b1ea87-d3b8-4d6b-b710-6bb15681570c",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "ae78cce6-b136-4da9-b485-86a75ff36d08",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "091ef791-f076-4139-91fc-0aeb7cb2910c",
                  "type": "text/plain",
                  "content": "Muito bom, para deixar sua avaliação, basta acessar o link abaixo:\n\n 👉 https://forms.gle/TUUVb2jfJgEo9a6M6",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "091ef791-f076-4139-91fc-0aeb7cb2910c",
                    "type": "text/plain",
                    "content": "Muito bom, para deixar sua avaliação, basta acessar o link abaixo:\n\n 👉 https://forms.gle/TUUVb2jfJgEo9a6M6"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "56a0732d-18bd-464f-aa7a-a4158fc9ce93",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "8f25aa5d-2901-4912-8d33-d385fd4c4da3",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "8f25aa5d-2901-4912-8d33-d385fd4c4da3",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "df21abab-5e58-4fbb-8cdc-0b0574703ab5",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "38fbafbd-9660-43e5-9687-2466944d6c09",
                  "type": "text/plain",
                  "content": "Eu sempre acho que a gente pode melhorar, então toda vez que você visitar nossa unidade eu vou pedir para você avaliar nosso atendimento.",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "38fbafbd-9660-43e5-9687-2466944d6c09",
                    "type": "text/plain",
                    "content": "Eu sempre acho que a gente pode melhorar, então toda vez que você visitar nossa unidade eu vou pedir para você avaliar nosso atendimento."
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "332eab78-851f-408e-8d00-41265e832699",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "62aca9a6-976d-4966-bc8a-f9786995d799",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "62aca9a6-976d-4966-bc8a-f9786995d799",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "867dfdb9-2896-4b21-9592-942c748c2de4",
                "$typeOfContent": "select-immediate",
                "type": "SendMessage",
                "settings": {
                  "id": "6eb7bfab-b3a1-4e8f-893a-d1d044704a58",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "Tudo bem?\n\nSelecione uma das opções!",
                    "scope": "immediate",
                    "options": [
                      {
                        "text": "Sim",
                        "previewText": "Sim",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Não",
                        "previewText": "Não",
                        "value": null,
                        "index": 1,
                        "type": null
                      }
                    ],
                    "quikReply": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "6eb7bfab-b3a1-4e8f-893a-d1d044704a58",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "Tudo bem?\n\nSelecione uma das opções!",
                      "scope": "immediate",
                      "options": [
                        {
                          "text": "Sim",
                          "previewText": "Sim",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Não",
                          "previewText": "Não",
                          "value": null,
                          "index": 1,
                          "type": null
                        }
                      ],
                      "quikReply": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "4155cb16-0ef7-491c-90ab-5fc2d2f03ae1",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "dce2918b-8ded-417f-ae90-5834d261ec0b",
              "typeOfStateId": "state",
              "$connId": "con_423",
              "$contentId": "867dfdb9-2896-4b21-9592-942c748c2de4",
              "$id": "8c718511-4ddb-4bca-ad59-c82a52da5e05",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*sim.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "e7be13e4-a4e2-421b-86a4-8dd78371e723",
              "typeOfStateId": "state",
              "$connId": "con_428",
              "$contentId": "867dfdb9-2896-4b21-9592-942c748c2de4",
              "$id": "09bcf29c-0cea-4dd5-88be-87876bc26c83",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*n[aAãÃ]o.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "d30b02b9-a993-4806-bc4d-4d3a86cd0812",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Responder NPS",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "5faff15e-e3cb-4c39-8ede-656276d2522b",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Responder NPS conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Sim",
            "Não"
          ],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "5dff6e87-e72b-46db-9df4-2f380221958e",
          "root": false,
          "$title": "Responder NPS",
          "$position": {
            "top": "3262.14px",
            "left": "4797.57px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "4055b2b7-3998-4be6-bb5a-6689fbbad65d": {
          "$contentActions": [
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "d448484d-1e8d-4312-8806-314f6d5ed588",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "f9692db4-7571-4ca0-83a5-948c925bc624",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Talvez mais tarde",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "ae156012-a66e-44bd-8c7f-63fa13098ac4",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Talvez mais tarde conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "c076d138-55ff-40f0-b069-c620a81b114d",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "4055b2b7-3998-4be6-bb5a-6689fbbad65d",
          "root": false,
          "$title": "Talvez mais tarde",
          "$position": {
            "top": "3223.43px",
            "left": "5098.43px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "e7be13e4-a4e2-421b-86a4-8dd78371e723": {
          "$contentActions": [
            {
              "action": {
                "$id": "382a58d7-ba98-4f28-80a8-aa5154482532",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "79311152-a62b-44bb-b751-e68ea37cdd7b",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "79311152-a62b-44bb-b751-e68ea37cdd7b",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "0a07fa48-5a94-429f-b43a-4ded231a4e56",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "469b45b7-ecd6-43ba-b0c4-a1f7583de358",
                  "type": "text/plain",
                  "content": "Muito obrigada pela ajuda.\n\nAgora eu vou encerrar o nosso atendimento, mas pode me chamar sempre que for preciso.",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "469b45b7-ecd6-43ba-b0c4-a1f7583de358",
                    "type": "text/plain",
                    "content": "Muito obrigada pela ajuda.\n\nAgora eu vou encerrar o nosso atendimento, mas pode me chamar sempre que for preciso."
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "1fd42040-9538-485d-959f-54053258e5be",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "f0d42989-7608-4f23-8022-da96d2906f19",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Resposta nps nao",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "611e330c-c7ad-4f95-8d37-ece3487d35ae",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Resposta nps nao conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "c076d138-55ff-40f0-b069-c620a81b114d",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "e7be13e4-a4e2-421b-86a4-8dd78371e723",
          "root": false,
          "$title": "Resposta nps nao",
          "$position": {
            "top": "3397px",
            "left": "4970px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "dce2918b-8ded-417f-ae90-5834d261ec0b": {
          "$contentActions": [
            {
              "action": {
                "$id": "d925267e-c85f-4f23-b5f2-9dfffe192e17",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "9f78700a-e8a0-4a97-b908-a87091cb92d9",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "9f78700a-e8a0-4a97-b908-a87091cb92d9",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "97dd60c3-e2e0-4836-9d13-3271ca99c212",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "1a80af23-adf9-4f0b-a9e9-a91bfce25d7b",
                  "type": "text/plain",
                  "content": "Muito obrigada pela ajuda.\n\nAgora eu vou encerrar o nosso atendimento, mas pode me chamar sempre que for preciso.",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "1a80af23-adf9-4f0b-a9e9-a91bfce25d7b",
                    "type": "text/plain",
                    "content": "Muito obrigada pela ajuda.\n\nAgora eu vou encerrar o nosso atendimento, mas pode me chamar sempre que for preciso."
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "7ce4161c-966d-46ea-8abf-848974e177c8",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "940d90d3-c6a2-4a8f-92c7-8a0a2235d068",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Resposta nps sim",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "bbaef2bf-ba55-4a1b-8eb1-1b918b43705a",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Resposta nps sim conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "dce2918b-8ded-417f-ae90-5834d261ec0b",
          "root": false,
          "$title": "Resposta nps sim",
          "$position": {
            "top": "3393px",
            "left": "4648px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "00f3ac6f-eb2a-40d2-80d0-723ec79a5113": {
          "$contentActions": [
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "5e80ad97-589e-4bab-8026-673bff03a4ce",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "8fa379c9-eebe-43d9-a5c8-e952dde43f60",
              "typeOfStateId": "state",
              "$connId": "con_433",
              "$id": "34c2c952-14bc-4703-a9a4-18ac954e4f49",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*sim.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "ec7c84ec-9b2e-439b-bfd9-e368a269f701",
              "typeOfStateId": "state",
              "$connId": "con_438",
              "$id": "a88f3a01-2bc8-4fd4-afde-5ae29fe28b93",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*n[aAãÃ]o.*)"
                  ]
                }
              ],
              "$invalid": false
            },
            {
              "stateId": "a7ae1434-ab48-45cb-95c4-c5198fd7ae97",
              "typeOfStateId": "state",
              "$connId": "con_443",
              "$id": "fdaf8b72-dc07-4428-9e37-4dca9d198ab3",
              "conditions": [
                {
                  "source": "input",
                  "comparison": "matches",
                  "values": [
                    "(?i)(.*sair.*)"
                  ]
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "cd6bcbb0-50ec-40d0-819a-50275c43b7e5",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Disparo de contato",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "c8cdc41d-2ce9-484a-88bf-55b8109885d3",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Disparo de contato conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "fallback",
            "$invalid": false
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "00f3ac6f-eb2a-40d2-80d0-723ec79a5113",
          "root": false,
          "$title": "Disparo de contato",
          "$position": {
            "top": "2999px",
            "left": "6132.43px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "8fa379c9-eebe-43d9-a5c8-e952dde43f60": {
          "$contentActions": [
            {
              "action": {
                "$id": "a5da2c16-e30e-4388-82e1-ed1671e25296",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "2e31567a-ecf6-47cd-82a7-9fd7da888bb3",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "2e31567a-ecf6-47cd-82a7-9fd7da888bb3",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "344b6b4d-626d-450c-80f8-1b9f484576c1",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "3834f8da-c0df-4cf0-92e3-13e000e34fc9",
                  "type": "text/plain",
                  "content": "Tudo bem! Se mudar de ideia é só mandar um “*Oi*”. 😊\n\nAté mais! 👋",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "3834f8da-c0df-4cf0-92e3-13e000e34fc9",
                    "type": "text/plain",
                    "content": "Tudo bem! Se mudar de ideia é só mandar um “*Oi*”. 😊\n\nAté mais! 👋"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "9aea14a0-4ba0-4bdd-8e77-78da0c07c4fb",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "8a68bea3-5184-4a3c-acbf-d1a081e1bb34",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Disparo contato nao",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "00132ad9-4c49-4674-8ef4-7be8215ddead",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "8fa379c9-eebe-43d9-a5c8-e952dde43f60",
          "root": false,
          "$title": "Disparo contato nao",
          "$position": {
            "top": "3139px",
            "left": "6304.71px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "ec7c84ec-9b2e-439b-bfd9-e368a269f701": {
          "$contentActions": [
            {
              "action": {
                "$id": "592f54f6-de74-4d55-bd1a-464237e78610",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "133857b6-4c0d-4413-8107-1d9e79be7560",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "133857b6-4c0d-4413-8107-1d9e79be7560",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "3a08e07b-5b95-4a8d-99e9-b6f77c48b538",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "0b3d9f3b-b02c-481d-8b4e-13810ad8e3ab",
                  "type": "text/plain",
                  "content": "Legal! 🙋‍♀️",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "0b3d9f3b-b02c-481d-8b4e-13810ad8e3ab",
                    "type": "text/plain",
                    "content": "Legal! 🙋‍♀️"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "8e4ca728-dd70-4f09-809e-cde3abd502ab",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "7e888f09-7523-438a-a2b7-286630424c5a",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Disparo contato sim",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "a66cce9d-60fc-4b04-a0f4-eceb6de26ad1",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "ec7c84ec-9b2e-439b-bfd9-e368a269f701",
          "root": false,
          "$title": "Disparo contato sim",
          "$position": {
            "top": "3137.71px",
            "left": "5961.71px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "5fd52118-10d2-467b-84a2-c711d5cfc6d4": {
          "$contentActions": [
            {
              "action": {
                "$id": "d9304487-ed7d-4e5f-b3d0-011e0ace2a4d",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "a0c2283f-3f4b-4764-a27c-56c57880857c",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "a0c2283f-3f4b-4764-a27c-56c57880857c",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "93f6d128-1fc4-4585-9553-148ca7ef0818",
                "$typeOfContent": "select",
                "type": "SendMessage",
                "settings": {
                  "id": "c56f49cb-6e49-4ecd-b99a-83c078fd347f",
                  "type": "application/vnd.lime.select+json",
                  "content": {
                    "text": "*Legal!* 🙋‍♀️ \n\n*Qual seria a unidade de São Paulo Capital?*\n\nToque no botão para escolher a unidade. 👇",
                    "options": [
                      {
                        "text": "Jardins",
                        "previewText": "Jardins",
                        "value": null,
                        "index": 0,
                        "type": null
                      },
                      {
                        "text": "Tatuapé",
                        "previewText": "Tatuapé",
                        "value": null,
                        "index": 1,
                        "type": null
                      },
                      {
                        "text": "Santo Amaro",
                        "previewText": "Santo Amaro",
                        "value": null,
                        "index": 2,
                        "type": null
                      },
                      {
                        "index": -1,
                        "text": "Moema",
                        "previewText": "Moema",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Tucuruvi",
                        "previewText": "Tucuruvi",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Ipiranga",
                        "previewText": "Ipiranga",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Itaim Bibi",
                        "previewText": "Itaim Bibi",
                        "type": null,
                        "value": null
                      },
                      {
                        "index": -1,
                        "text": "Lapa",
                        "previewText": "Lapa",
                        "type": null,
                        "value": null
                      }
                    ],
                    "limitMenu": false
                  },
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "c56f49cb-6e49-4ecd-b99a-83c078fd347f",
                    "type": "application/vnd.lime.select+json",
                    "content": {
                      "text": "*Legal!* 🙋‍♀️ \n\n*Qual seria a unidade de São Paulo Capital?*\n\nToque no botão para escolher a unidade. 👇",
                      "options": [
                        {
                          "text": "Jardins",
                          "previewText": "Jardins",
                          "value": null,
                          "index": 0,
                          "type": null
                        },
                        {
                          "text": "Tatuapé",
                          "previewText": "Tatuapé",
                          "value": null,
                          "index": 1,
                          "type": null
                        },
                        {
                          "text": "Santo Amaro",
                          "previewText": "Santo Amaro",
                          "value": null,
                          "index": 2,
                          "type": null
                        },
                        {
                          "index": -1,
                          "text": "Moema",
                          "previewText": "Moema",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Tucuruvi",
                          "previewText": "Tucuruvi",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Ipiranga",
                          "previewText": "Ipiranga",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Itaim Bibi",
                          "previewText": "Itaim Bibi",
                          "type": null,
                          "value": null
                        },
                        {
                          "index": -1,
                          "text": "Lapa",
                          "previewText": "Lapa",
                          "type": null,
                          "value": null
                        }
                      ],
                      "limitMenu": false
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "dd214042-0bef-450a-810e-670a27948f74",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "unit"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false,
                "variable": "unit"
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "12bcc2b8-f41a-4cba-879e-f27203004bcc",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Capital",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "a0e3b999-43e9-4c2a-bf11-f748d2cd9ac8",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Capital conteudo",
                "action": "{{input.content}}"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            }
          ],
          "$inputSuggestions": [
            "Jardins",
            "Tatuapé",
            "Santo Amaro",
            "Moema",
            "Tucuruvi",
            "Ipiranga",
            "Itaim Bibi",
            "Lapa"
          ],
          "$defaultOutput": {
            "stateId": "83f47924-b22a-4ec1-b3f2-c2d50e9fc161",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "5fd52118-10d2-467b-84a2-c711d5cfc6d4",
          "root": false,
          "$title": "Capital",
          "$position": {
            "top": "3143.25px",
            "left": "184px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "deb9d44f-9a7a-4630-a3c0-4c2e034dfa5f": {
          "$contentActions": [
            {
              "action": {
                "$id": "ac1d3cb6-0b7d-4696-a889-ad212de1929e",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "5864298b-6590-464a-9209-cc806b0b7b0a",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "5864298b-6590-464a-9209-cc806b0b7b0a",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "7427d41d-c60a-405a-9c4d-26cd2cac7171",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "f442beb7-7142-4b33-8b00-fb0a567b5a81",
                  "type": "text/plain",
                  "content": "Vi aqui que o dia {{date}} já passou... 🤔\n\nQual seria a melhor data para agendar seu procedimento? \n\n👉Exemplo: 01/07",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "f442beb7-7142-4b33-8b00-fb0a567b5a81",
                    "type": "text/plain",
                    "content": "Vi aqui que o dia {{date}} já passou... 🤔\n\nQual seria a melhor data para agendar seu procedimento? \n\n👉Exemplo: 01/07"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": false,
                "$cardContent": {
                  "document": {
                    "id": "79ef651f-0b13-4c3a-9c90-12d78da2d4fc",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "date"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false,
                "variable": "date"
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [
            {
              "stateId": "deb9d44f-9a7a-4630-a3c0-4c2e034dfa5f",
              "typeOfStateId": "state",
              "$connId": "con_448",
              "$id": "78bbff64-68b9-4fd2-ad2c-7d45728179e5",
              "conditions": [
                {
                  "source": "context",
                  "comparison": "equals",
                  "values": [
                    "true"
                  ],
                  "variable": "dateHasPassed"
                }
              ],
              "$invalid": false
            }
          ],
          "$enteringCustomActions": [
            {
              "$id": "cb1aad88-13cd-4ff5-a071-9a095f365ee5",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento data ja passou",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [
            {
              "$id": "ed0a2fb8-d823-489e-a59b-7da23b98c907",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento data ja passou conteudo",
                "action": "Exibicao"
              },
              "conditions": [
                {
                  "values": [],
                  "source": "input",
                  "comparison": "exists"
                }
              ]
            },
            {
              "$id": "de9dc727-8d01-4bef-9d2a-201438f3927b",
              "$typeOfContent": "",
              "type": "ExecuteScript",
              "$title": "Executar script -  validate if date has passed",
              "$invalid": false,
              "settings": {
                "function": "run",
                "source": "/**\n* All input variables needs to be passed as function param;\n* Objects received as param needs to be parsed. Ex.: JSON.parse(inputVariable1);\n* Objects returned needs to be stringfied. Ex.: JSON.stringify(inputVariable1);\n**/\nfunction run(userDate) {\n  try {\n\n    // Obtenha a data atual\n    const currentDate = new Date();\n\n    // Converta a data fornecida pelo usuário para o formato \"dd/MM\"\n    const [userDay, userMonth] = userDate.split('/').map(Number);\n    const userYear = currentDate.getFullYear(); // Use o ano atual\n\n    // Crie um objeto Date com a data fornecida pelo usuário\n    const userSelectedDate = new Date(userYear, userMonth - 1, userDay);\n\n    // Compare as duas datas\n    if (userSelectedDate < currentDate) {\n      return true; // A data fornecida já passou\n    } else {\n      return false; // A data fornecida ainda não passou\n    }\n\n  } catch (e) {\n    return true\n  }\n}",
                "inputVariables": [
                  "input.content"
                ],
                "outputVariable": "dateHasPassed",
                "LocalTimeZoneEnabled": false
              },
              "conditions": []
            }
          ],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "315cdf48-6354-48bf-913b-caa37deb2929",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "deb9d44f-9a7a-4630-a3c0-4c2e034dfa5f",
          "root": false,
          "$title": "Agendamento data ja passou",
          "$position": {
            "top": "2618.11px",
            "left": "833px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        },
        "a3d079cf-3a2e-4c36-8acc-7860c6de0b94": {
          "$contentActions": [
            {
              "action": {
                "$id": "0e6cf5fb-cc73-4128-8c30-176f7dadc5f4",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "3b0ebc00-8863-47d4-ba04-2331a542900e",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "3b0ebc00-8863-47d4-ba04-2331a542900e",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "74be46ba-c312-4a8b-bb5c-d48bea4a3483",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "28540db9-1742-497f-b8cf-ded462fea49f",
                  "type": "text/plain",
                  "content": "Nesse horário não estamos funcionando... 😕\n\nVamos tentar novamente! 😊",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "28540db9-1742-497f-b8cf-ded462fea49f",
                    "type": "text/plain",
                    "content": "Nesse horário não estamos funcionando... 😕\n\nVamos tentar novamente! 😊"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "e0bfea3a-2caa-4338-b608-4914103241dc",
                "$typeOfContent": "chat-state",
                "type": "SendMessage",
                "settings": {
                  "id": "cb125ab8-0a22-4b93-9d44-f8f7641798dd",
                  "type": "application/vnd.lime.chatstate+json",
                  "content": {
                    "state": "composing",
                    "interval": 1000
                  }
                },
                "$cardContent": {
                  "document": {
                    "id": "cb125ab8-0a22-4b93-9d44-f8f7641798dd",
                    "type": "application/vnd.lime.chatstate+json",
                    "content": {
                      "state": "composing",
                      "interval": 1000
                    }
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "action": {
                "$id": "285e2b2f-4ddd-4e9e-8680-900bf438a096",
                "$typeOfContent": "text",
                "type": "SendMessage",
                "settings": {
                  "id": "7f8a5ca4-61ac-4898-a138-69436eb08cf5",
                  "type": "text/plain",
                  "content": "{{config.endDateSaturday}}",
                  "metadata": {}
                },
                "$cardContent": {
                  "document": {
                    "id": "7f8a5ca4-61ac-4898-a138-69436eb08cf5",
                    "type": "text/plain",
                    "content": "{{config.endDateSaturday}}"
                  },
                  "editable": true,
                  "deletable": true,
                  "position": "left"
                }
              },
              "$invalid": false
            },
            {
              "input": {
                "bypass": true,
                "$cardContent": {
                  "document": {
                    "id": "6ea4818d-757d-46d7-927f-e78f8fe94900",
                    "type": "text/plain",
                    "textContent": "Entrada do usuário",
                    "content": "Entrada do usuário"
                  },
                  "editable": false,
                  "deletable": true,
                  "position": "right",
                  "editing": false
                },
                "$invalid": false
              },
              "$invalid": false
            }
          ],
          "$conditionOutputs": [],
          "$enteringCustomActions": [
            {
              "$id": "882f5ab0-fb07-4627-942a-44fe33b5632b",
              "$typeOfContent": "",
              "type": "TrackEvent",
              "$title": "Registro de eventos - exibicao",
              "$invalid": false,
              "settings": {
                "extras": {},
                "category": "Agendamento fora do horario",
                "action": "Exibicao"
              },
              "conditions": []
            }
          ],
          "$leavingCustomActions": [],
          "$inputSuggestions": [],
          "$defaultOutput": {
            "stateId": "315cdf48-6354-48bf-913b-caa37deb2929",
            "$invalid": false,
            "typeOfStateId": "state"
          },
          "$tags": [
            {
              "background": "#2cc3d5",
              "label": "tracking",
              "id": "blip-tag-a135fbb0-cde3-84ed-f91c-190515e4203a",
              "canChangeBackground": false
            }
          ],
          "id": "a3d079cf-3a2e-4c36-8acc-7860c6de0b94",
          "root": false,
          "$title": "Agendamento fora do horario",
          "$position": {
            "top": "2793.56px",
            "left": "854.778px"
          },
          "$invalidContentActions": false,
          "$invalidOutputs": false,
          "$invalidCustomActions": false,
          "$invalid": false
        }
      },
      "globalActions": {
        "$contentActions": [],
        "$conditionOutputs": [],
        "$enteringCustomActions": [],
        "$leavingCustomActions": [],
        "$inputSuggestions": [],
        "$defaultOutput": {
          "stateId": "fallback",
          "$invalid": false
        },
        "$tags": [],
        "id": "global-actions",
        "$invalidContentActions": false,
        "$invalidOutputs": false,
        "$invalidCustomActions": false,
        "$invalid": false
      }
    }
    this.step = 'chooseTheBoxes'
  }

  chooseTheServices() {
    this.step = 'chooseTheServices'

  }
  confirm() {
    this.step = 'confirm'

  }
}
