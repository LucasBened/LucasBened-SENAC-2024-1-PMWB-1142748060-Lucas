use dadosgestao;

CREATE TABLE dados_pragas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pais VARCHAR(255),
    tipo_praga VARCHAR(255),
    area_afetada FLOAT,
    numero_ocorrencias INT,
    impacto_producao VARCHAR(255),
    medidas_controle VARCHAR(255),
    custo_controle FLOAT,
    ano VARCHAR(255)
);

drop table dados_pragas;

CREATE TABLE zonas_ajudadas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pais VARCHAR(255),
    zona VARCHAR(255),
    tipo_ajuda VARCHAR(255),
    ano VARCHAR(255)
);

select * from zonas_ajudadas;

select * from dados_pragas;

INSERT INTO dados_pragas 
(pais, tipo_praga, area_afetada, numero_ocorrencias, impacto_producao, medidas_controle, custo_controle, ano) 
VALUES 
('United States', 'Aphids', 120.5, 300, 'High', 'Pesticides', 5000.00, '2022'),
('United Kingdom', 'Whitefly', 200.0, 400, 'Medium', 'Biological control', 3000.00, '2022'),
('Australia', 'Locusts', 500.0, 1000, 'Very High', 'Pesticides', 10000.00, '2022');

INSERT INTO zonas_ajudadas 
(pais, zona, tipo_ajuda, ano) 
VALUES 
('United States', 'Midwest', 'Financial Aid', '2022'),
('United Kingdom', 'Scotland', 'Technical Assistance', '2022'),
('Australia', 'Queensland', 'Resource Provision', '2022');

INSERT INTO dados_pragas 
(pais, tipo_praga, area_afetada, numero_ocorrencias, impacto_producao, medidas_controle, custo_controle, ano) 
VALUES 
('Brazil', 'Whitefly', 150.0, 200, 'Medium', 'Biological control', 2500.00, '2022');