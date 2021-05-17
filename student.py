class Student:
    school="Akirachix"


    def __init__(self,name,age):

      self.name=name
      self.age=age
    def speak(self):
          return f"Hello class, my name is {self.name}"
    def year_of_birth(self):
        current_year=2021
        return f"Hello class, my age is {current_year-self.age}"      
                
