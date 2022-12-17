import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
	public rates: number[]
	public selectedRate: number
	public selectedVoice: SpeechSynthesisVoice | null;
	public text: string
	public voices: SpeechSynthesisVoice[]
	constructor(){
		this.voices = [];
		this.rates = [ .25, .5, .75, 1, 1.25, 1.5, 1.75, 2 ];
		this.selectedVoice = null;
		this.selectedRate = 1;
		this.text = "";
	}
	public demoSelectedVoice() : void {
		if ( ! this.selectedVoice ) {
			console.warn( "Expected a voice, but none was selected." );
			return;
		}
		var demoText = "fernanda";
		this.stop();
		this.synthesizeSpeechFromText( this.selectedVoice,this.selectedRate,demoText );
	}
	public ngOnInit() : void {
		this.voices = speechSynthesis.getVoices();
		this.selectedVoice = ( this.voices[ 0 ] || null );

		if ( ! this.voices.length ) {
			speechSynthesis.addEventListener("voiceschanged",() => {
				this.voices = speechSynthesis.getVoices();
				this.selectedVoice = ( this.voices[ 0 ] || null );
			});
		}
	}
	public speak() : void{
		if ( ! this.selectedVoice || ! this.text ){
			return;
		}
		this.stop();
		this.synthesizeSpeechFromText( this.selectedVoice, this.selectedRate, this.text );
	}
	stop() : void {
		if ( speechSynthesis.speaking ) {
			speechSynthesis.cancel();
		}
	}

	private synthesizeSpeechFromText(voice: SpeechSynthesisVoice,rate: number,text: string) : void{
		var utterance = new SpeechSynthesisUtterance(text);
		utterance.voice = this.selectedVoice;
		utterance.rate = rate;
		speechSynthesis.speak( utterance );
	}
}
