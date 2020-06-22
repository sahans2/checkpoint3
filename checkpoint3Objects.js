var checkpoint3Commands = {
    checkpoint3Tests: function (checkpoint3Assets) {
          this
            .click('@addEmployee')
            .verify.containsText('ul[class="listContainer"]', "New Employee")
            .click('@newEmployee')
            .clearValue('@newEmployeeName')
            .setValue('@newEmployeeName',checkpoint3Assets[0])
            .clearValue('@newEmployeePhone')
            .setValue('@newEmployeePhone',checkpoint3Assets[1])
            .clearValue('@newEmployeeEmail')
            .setValue('@newEmployeeEmail',checkpoint3Assets[2])
            .clearValue('@newEmployeeTitle')
            .setValue('@newEmployeeTitle',checkpoint3Assets[3])
            .click('button[name="save"]')
            .verify.containsText('ul[class="listContainer"]', "Little Mermaid")
        
    
            this
            .click('@selectEmployee')
            .clearValue('@newEmployeeTitle')
            .setValue('@newEmployeeTitle',checkpoint3Assets[4])
            .click('@save')
            .verify.valueContains('@newEmployeeTitle', checkpoint3Assets[4])
        

            this
            .click('@selectEmployee')
            .clearValue('@newEmployeePhone')
            .setValue('@newEmployeePhone',checkpoint3Assets[5])
            .click('@cancel')
            .verify.valueContains('@newEmployeePhone', checkpoint3Assets[1])
        
        
            this
            .setValue('@searchBox',checkpoint3Assets[0])
            .verify.containsText('ul[class="listContainer"]', checkpoint3Assets[0])
        
         
            this
            .click('@selectEmployee')
            .verify.valueContains('@newEmployeeName', checkpoint3Assets[0])
            .verify.valueContains('@newEmployeePhone', checkpoint3Assets[1])
            .verify.valueContains('@newEmployeeEmail', checkpoint3Assets[2])
            .verify.valueContains('@newEmployeeTitle', checkpoint3Assets[4]) 
            .expect.element('@employeeID').text.not.equal('-1')
            this
            .expect.element('@employeeID').text.not.equal('10000')
        
   
            this
            .click('@selectEmployee')
            .click('@delete')
            .api.acceptAlert()
            .expect.element('ul[class="listContainer"]').text.not.equal('Little Mermaid')
            return this 
       
    }
    }

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [checkpoint3Commands],
    elements: {
        addEmployee: 'li[name="addEmployee"]',
        newEmployeeName: 'input[name="nameEntry"]',
        newEmployeePhone: 'input[name="phoneEntry"]',
        newEmployeeEmail: 'input[name="emailEntry"]',
        newEmployeeTitle: 'input[name="titleEntry"]',
       
        newEmployee: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        selectEmployee: {
            selector: '//li[text()="Little Mermaid"]',
            locateStrategy: 'xpath'
        },
        employeeID: {
            selector: '//span[contains(text(),"")]',
            locateStrategy: 'xpath'
        },
        save: 'button[name="save"]',
        cancel: 'button[name="cancel"]',
        delete: 'button[name="delete"]',
        searchBox: 'input[name="searchBox"]'

    


    }
}