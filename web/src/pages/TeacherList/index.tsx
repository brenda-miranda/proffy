  
import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css'


function TeacherList(){
    const [teachers, setTeachers] = useState([]);

    const[subject, setSubject] = useState('');
    const[week_day, setWeekday] = useState('');
    const[time, setTime] = useState('');

    async function searchTeachers(event: FormEvent){
      event.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
    }

    return (
         <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis: ">
               <form id="search-teachers" onSubmit={searchTeachers}>
                  <Select 
                        name="subject" 
                        label="Subject" 
                        value={subject}
                        onChange={event => {
                            setSubject(event.target.value)
                        }}
                        options={[
                           { value: 'Artes', label: 'Artes' },
                           { value: 'Biologia', label: 'Biologia' },
                           { value: 'Física', label: 'Física' },
                           { value: 'Química', label: 'Química' },
                           { value: 'Matemática', label: 'Matemática' },
                           { value: 'Português', label: 'Português' },
                           { value: 'Inglês', label: 'Inglês' },
                           { value: 'História', label: 'História' },
                           { value: 'Geografia', label: 'Geografia' },
                           { value: 'Filosofia', label: 'Filosofia' },
                        ]}
                    />
                    <Select 
                        name="weed_day" 
                        label="Dia da semana" 
                        value={week_day}
                        onChange={event => {
                            setWeekday(event.target.value)
                        }}
                        options={[
                           { value: '0', label: 'Domingo' },
                           { value: '1', label: 'Segunda-feira' },
                           { value: '2', label: 'Terça-feira' },
                           { value: '3', label: 'Quarta-feira' },
                           { value: '4', label: 'Quinta-feira' },
                           { value: '5', label: 'Sexta-feira' },
                           { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hour"
                        value={time}
                        onChange={event => { setTime(event.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList;