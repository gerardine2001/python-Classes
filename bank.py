class Bank:
    def __init__(self,name,accountNumber,phone): 
        self.name=name
        self.accountNumber=accountNumber
        self.phone=phone
    def createAccont(self,name,accountNumber,phone):
        return f"This {self.name} has created an account with {self.accountNumber}"
    def deposit(self, name,accountNumber,phone,):
        return f"Get you balance on {self.phone}"
        

