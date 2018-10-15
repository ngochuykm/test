<?php 

class Animal {

public $name;

    public function nameChange()
    {
        $this->name = "Programmer Interview";
    }

}
$animalObj = new Animal();
$animalObj->nameChange();
?>